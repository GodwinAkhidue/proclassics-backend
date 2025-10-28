import express from "express";
import psql_query from "../../../../utils/postgresql.js";

const get_all = express();
get_all.get("", async (_, res) => {
  const query = `SELECT name FROM categories;`;

  const { result, error } = await psql_query(query);

  if (error) {
    return res.status(400).json({ message: "Database Error" });
  }

  const categories = result.rows;

  return res.status(200).json({ categories });
});

export default get_all;
