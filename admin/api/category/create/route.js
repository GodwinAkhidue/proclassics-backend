import express from "express";
import psql_query from "../../../../utils/postgresql.js";

const create = express();
create.post("", async (req, res) => {
  const { name, image } = req.body;

  const query = `INSERT INTO categories 
    (slug, name, image)
    VALUES ($1, $2, $3);`;

  const values = [
    name.toLowerCase().replaceAll(" ", "-"),
    name,
    JSON.stringify(image),
  ];

  const { result, error } = await psql_query(query, values);

  if (error) {
    console.log(error)
    return res.status(400).json({ message: "Database Error" });
  }

  if (result.command !== "INSERT" || result.rowCount < 1) {
    return res
      .status(400)
      .json({ message: "Could not add category, try again" });
  }

  return res.status(200).json();
});

export default create;
