import express from "express";
import psql_query from "../../../utils/postgresql.js";

const get_all_with_images = express();
get_all_with_images.get("", async (_, res) => {
  const query = `SELECT slug, name, image
     FROM categories
     ORDER BY created_at DESC;`;

  const { result, error } = await psql_query(query);

  if (error) {
    return res.status(400).json({ message: "Database Error" });
  }

  return res.status(200).json({ categories: result.rows });
});

export default get_all_with_images;
