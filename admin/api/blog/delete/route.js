import express from "express";
import psql_query from "../../../../utils/postgresql.js";

const deleteBlog = express();
deleteBlog.delete("/:slug", async (req, res) => {
  const { slug } = req.params;

  const query = 
  `DELETE FROM blogs 
   WHERE slug = $1;`;

  const values = [slug];

  const { _, error } = await psql_query(query, values);

  if (error) {
    return res.status(400).json({ message: "Database Error" });
  }

  return res.status(200).json();
});

export default deleteBlog;
