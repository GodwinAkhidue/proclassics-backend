import express from "express";
import psql_query from "../../../../utils/postgresql.js";

const create = express();
create.post("", async (req, res) => {
  const { name, description, category, images, otherInfo, price } = req.body;

  const query = `INSERT INTO products 
    (slug, name, description, category, images, other_info, price)
    VALUES ($1, $2, $3, $4, $5, $6, $7);`;

  const values = [
    name.toLowerCase().replaceAll(" ", "-"),
    name,
    description,
    category,
    JSON.stringify(images),
    JSON.stringify(otherInfo),
    price,
  ];

  const { result, error } = await psql_query(query, values);

  if (error) {
    if (error.code === "23505") {
      return res.status(400).json({ message: "Name already in use" });
    }
    return res.status(400).json({ message: "Database Error" });
  }

  if (result.command !== "INSERT" || result.rowCount < 1) {
    return res
      .status(400)
      .json({ message: "Could not add product, try again" });
  }

  return res.status(200).json();
});

export default create;
