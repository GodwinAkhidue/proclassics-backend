import express from "express";
import psql_query from "../../../utils/postgresql.js";

const get_some_from_category = express();
get_some_from_category.post("", async (req, res) => {
  const { category, slug } = req.body;

  const query = `SELECT slug, images, name, category, price, created_at
     FROM products
     WHERE category = $1
     AND slug != $2
     ORDER BY created_at DESC
     LIMIT 4;`;

  const values = [category, slug];

  const { result, error } = await psql_query(query, values);

  if (error) {
    return res.status(400).json({ message: "Database Error" });
  }

  return res.status(200).json({ products: result.rows });
});

export default get_some_from_category;
