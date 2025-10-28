import express from "express";
import psql_query from "../../../utils/postgresql.js";

const get_all_slugs = express();
get_all_slugs.get("", async (req, res) => {
  const { slug } = req.params;

  const query = `SELECT slug FROM products;`;

  const { result, error } = await psql_query(query);

  if (error) {
    return res.status(400).json({ message: "Database Error" });
  }

  return res.status(200).json({ slugs: result.rows });
});

export default get_all_slugs;
