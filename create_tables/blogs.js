import psql_query from "../utils/postgresql.js";

const create_blogs_table = async () => {
  const query = `CREATE TABLE IF NOT EXISTS blogs (
        slug VARCHAR UNIQUE,
        title VARCHAR UNIQUE,
        thumbnail JSONB,
        sections JSONB,
        published BOOLEAN,
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

export default create_blogs_table;
