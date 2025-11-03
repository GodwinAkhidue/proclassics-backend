import psql_query from "../utils/postgresql.js";

const create_banners_table = async () => {
  const query = `CREATE TABLE IF NOT EXISTS banners (
        name VARCHAR UNIQUE,
        image JSONB
    );`;

  const { result, error } = await psql_query(query);

  if (error) {
    return false;
  }

  if (result.command === "CREATE") {
    return true;
  }

  return false;
};

export default create_banners_table;
