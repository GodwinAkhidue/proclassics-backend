import express from "express";
import psql_query from "../../../utils/postgresql.js";

const get_some = express();
get_some.get("/:page", async (req, res) => {
  const { page } = req.params;

  const limit = 10;
  const offset = (page - 1) * limit;

  const query = `SELECT slug, image, name, created_at
     FROM categories
     OFFSET $1
     LIMIT $2;`;

  const values = [offset, limit];

  const { result, error } = await psql_query(query, values);

  if (error) {
    return res.status(400).json({ message: "Database Error" });
  }

  if (result.command !== "SELECT" || result.rows < 1) {
    return res.status(400).json({ message: "Could not find any category" });
  }

  return res.status(200).json({ categories: result.rows });
});

export default get_some;
