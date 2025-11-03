import express from "express";
import psql_query from "../../../../utils/postgresql.js";

const create = express();
create.post("", async (req, res) => {
  const { title, thumbnail, sections } = req.body;

  const query = `INSERT INTO blogs 
  (slug, title, thumbnail, sections)
  VALUES ($1, $2, $3, $4);`;

  const values = [
    title.toLowerCase().replaceAll(" ", "-"),
    title,
    JSON.stringify(thumbnail),
    JSON.stringify(sections),
  ];

  const { error } = await psql_query(query, values);

  if (error) {
    if (error.code === "23505") {
      return res.status(400).json({ message: "Title already in use" });
    }
    return res.status(400).json({ message: "Database Error" });
  }

  return res.status(200).json();
});

export default create;
