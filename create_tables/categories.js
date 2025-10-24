import psql_query from "../utils/postgresql.js";

const create_categories_table = async () => {
  const query = `CREATE TABLE IF NOT EXISTS categories (
        slug VARCHAR UNIQUE,
        name VARCHAR UNIQUE,
        image JSONB,
        created_at TIMESTAMPTZ DEFAULT NOW()
    );`;

  const { result, error } = await psql_query(query);

  if (error) {
    console.log(error);
    return false;
  }

  if (result.command === "CREATE") {
    return true;
  }

  return false;
};

export default create_categories_table;
