import psql_query from "../utils/postgresql.js";

const create_products_table = async () => {
  const query = `CREATE TABLE IF NOT EXISTS products (
        slug VARCHAR UNIQUE,
        name VARCHAR UNIQUE,
        description TEXT,
        category VARCHAR,
        images JSONB,
        other_info JSONB,
        price DECIMAL,
        created_at TIMESTAMPTZ DEFAULT NOW()
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

export default create_products_table;
