import express from "express";
import psql_query from "../../../../utils/postgresql.js";

const get_count = express();
get_count.get("", async (_, res) => {
  const query = `SELECT COUNT(*) FROM blogs;`;

  const { result, error } = await psql_query(query);

  if (error) {
    return res.status(400).json({ message: "Database Error" });
  }

  const count = result.rows[0].count;
  return res.status(200).json({ count });
});

export default get_count;
