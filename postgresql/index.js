import pg from "pg";
import dotenv from "dotenv";

dotenv.config({ path: "./postgresql/.env" });

const host = process.env.POSTGRES_HOST || "localhost";
const port = process.env.POSTGRES_PORT || 5432;
const password = process.env.POSTGRES_PASSWORD || "password";
const user = process.env.POSTGRES_USER || "postgres";
const database = process.env.POSTGRES_DB || "test";

async function runner() {
  const client = new pg.Client({
    host,
    password,
    user,
    port,
    database,
  });

  try {
    await client.connect();
    console.log("Connected to database!");

    // drop 'users' table if exists
    await client.query(`
    DROP TABLE  IF EXISTS users;
    `);
    console.log("Table 'users' deleted!");

    // create 'users' table
    await client.query(`
    CREATE TABLE users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL
    );`);
    console.log("Table 'users' created!");

    // insert data into 'users'
    await client.query(`
    INSERT INTO users (name, email) VALUES
      ('Bob', 'bob@test.com'),
      ('Nick', 'nick@test.com'),
      ('Tom', 'tom@test.com'),
      ('Alice', 'alice@test.com'),
      ('Martin', 'martin@test.com')
    ;`);
    console.log("Data added to 'users' table!");
  } catch (error) {
    console.log(error);
  } finally {
    await client.end();
  }
}

runner();
