import express from "express";
import psql_query from "../../../utils/postgresql.js";

const get_some = express();
get_some.get("/:page", async (req, res) => {
  const { page } = req.params;

  const limit = 10;
  const offset = (page - 1) * limit;

  const query = 
    `SELECT slug, title, thumbnail, published, created_at
     FROM blogs
     ORDER BY created_at DESC
     OFFSET $1
     LIMIT $2;`;

  const values = [offset, limit];

  const { result, error } = await psql_query(query, values);

  if (error) {
    return res.status(400).json({ message: "Database Error" });
  }

  return res.status(200).json({ blogs: result.rows });
});

export default get_some;
