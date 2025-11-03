import psql_query from "../utils/postgresql.js";

export const create_banner_row_homepage_1 = async () => {
  const query = `INSERT INTO banners (name)
   VALUES ($1);`;

  const values = ["Homepage 1"];

  const { result, error } = await psql_query(query, values);

  if (error) {
    if (error.code === "23505") {
      return true;
    }
    return false;
  }

  if (result.command === "CREATE") {
    return true;
  }

  return false;
};
