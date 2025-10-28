import express from "express";
import psql_query from "../../../utils/postgresql.js";

const get_one = express();
get_one.get("/:slug", async (req, res) => {
  const { slug } = req.params;

  const query = `SELECT * FROM products
   WHERE slug = $1
   LIMIT 1;`;

  const values = [slug];
  const { result, error } = await psql_query(query, values);

  if (error) {
    return res.status(400).json({ message: "Database Error" });
  }

  return res.status(200).json({ product: result.rows[0] });
});

export default get_one;
