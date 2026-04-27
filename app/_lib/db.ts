import postgres from "postgres";

export const sql = postgres({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  connect_timeout: 10,
  ssl: "require",
});

// test connection on startup
if (process.env.DB_HOST) {
  console.log("Database loader running...");

  sql`SELECT 1`
    .then(() => {
      console.log("✅ Database connected");
    })
    .catch((err) => {
      console.error("❌ Database connection failed:", err.message);
    });
}

export default sql;
