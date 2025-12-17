import express from "express";
import psql_query from "../../../utils/postgresql.js";

const get_all = express();
get_all.get("", async (req, res) => {
  const query = `SELECT slug, title, thumbnail, published, created_at
     FROM blogs
     WHERE published = true
     ORDER BY created_at DESC;`;

  const { result, error } = await psql_query(query);

  if (error) {
    return res.status(400).json({ message: "Database Error" });
  }

  return res.status(200).json({ blogs: result.rows });
});

export default get_all;
