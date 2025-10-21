import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
  user: process.env.POSTGRESQL_USER || "postgres",
  host: process.env.POSTGRESQL_HOST || "localhost",
  port: process.env.POSTGRESQL_PORT || 5432,
  database: process.env.POSTGRESQL_DATABASE || "postgres",
  password: process.env.POSTGRESQL_PASSWORD,
});

const psql_query = async (query, values) => {
  try {
    const db = await pool.connect();
    const result = await db.query(query, values);
    return { result };
  } catch (error) {
    return { error };
  }
};

export default psql_query;
