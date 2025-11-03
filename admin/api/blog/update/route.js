import express from "express";
import psql_query from "../../../../utils/postgresql.js";

const update = express();
update.post("", async (req, res) => {
  const { slug, title, thumbnail, sections } = req.body;

  const query = `UPDATE blogs 
   SET slug = $1, 
   title = $2, 
   thumbnail = $3, 
   sections = $4
   WHERE slug = $5;`;

  const values = [
    title.toLowerCase().replaceAll(" ", "-"),
    title,
    JSON.stringify(thumbnail),
    JSON.stringify(sections),
    slug,
  ];

  const { result, error } = await psql_query(query, values);

  if (error) {
    if (error.code === "23505") {
      return res.status(400).json({ message: "Title already in use" });
    }
    return res.status(400).json({ message: "Database Error" });
  }

  if (result.command !== "UPDATE" || result.rowCount < 1) {
    return res
      .status(400)
      .json({ message: "Could not update article, try again" });
  }

  return res.status(200).json();
});

export default update;
