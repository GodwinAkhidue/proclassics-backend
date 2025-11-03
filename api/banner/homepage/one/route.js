import express from "express";
import psql_query from "../../../../utils/postgresql.js";

const one = express();
one.get("", async (_, res) => {
  const query = `SELECT image 
   FROM banners 
   WHERE name = $1;`;

  const values = ["Homepage 1"];

  const { result, error } = await psql_query(query, values);

  if (error) {
    return res.status(400).json({ message: "Database Error" });
  }

  const image = result.rows[0].image;
  return res.status(200).json({ image });
});

export default one;
