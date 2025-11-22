import express from "express";
import psql_query from "../../../utils/postgresql.js";

const get_some_from_one_category = express();
get_some_from_one_category.post("", async (req, res) => {
  const { page, slug } = req.body;

  const limit = 10;
  const offset = (page - 1) * limit;

  const get_category_name = await psql_query(
    `SELECT name 
    FROM categories
    WHERE slug = $1
    LIMIT 1;`,
    [slug]
  );

  if (get_category_name.result.rowCount <= 0) {
    return res.status(200).json({ products: [] });
  }

  const category = get_category_name.result.rows[0].name;

  const query = `SELECT slug, images, name, category, price, created_at
     FROM products
     WHERE category = $3
     ORDER BY created_at DESC
     OFFSET $1
     LIMIT $2;`;

  const values = [offset, limit, category];

  const { result, error } = await psql_query(query, values);

  if (error) {
    return res.status(400).json({ message: "Database Error" });
  }

  return res.status(200).json({ products: result.rows });
});

export default get_some_from_one_category;
