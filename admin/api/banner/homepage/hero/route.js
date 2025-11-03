import express from "express";
import psql_query from "../../../../../utils/postgresql.js";

const hero = express();
hero.post("", async (req, res) => {
  const { image } = req.body;

  const query = `UPDATE banners
   SET image = $1
   WHERE name = $2;`;

  const values = [JSON.stringify(image), "Homepage Hero"];

  const { error } = await psql_query(query, values);

  if (error) {
    return res.status(400).json({ message: "Database Error" });
  }

  return res.status(200).json();
});

export default hero;
