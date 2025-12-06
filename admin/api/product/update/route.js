import express from "express";
import psql_query from "../../../../utils/postgresql.js";

const update = express();
update.post("", async (req, res) => {
  const { slug, name, description, category, images, otherInfo, price } =
    req.body;

  const query = `UPDATE products 
   SET slug = $1, 
   name = $2, 
   description = $3, 
   category = $4, 
   images = $5, 
   other_info = $6, 
   price = $7
   WHERE slug = $8;`;

  const values = [
    name.toLowerCase().replaceAll(" ", "-"),
    name,
    description,
    category,
    JSON.stringify(images),
    JSON.stringify(otherInfo),
    price,
    slug,
  ];

  const { result, error } = await psql_query(query, values);

  if (error) {
    if (error.code === "23505") {
      return res.status(400).json({ message: "Name already in use" });
    }
    return res.status(400).json({ message: "Database Error" });
  }

  if (result.command !== "UPDATE" || result.rowCount < 1) {
    return res
      .status(400)
      .json({ message: "Could not add product, try again" });
  }

  return res.status(200).json();
});

export default update;
