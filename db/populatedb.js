#! /usr/bin/env node

//This shebang line tells the OS to run this file with
//node when you execute it directly (e.g., ./seed.js).

const { Client } = require("pg");
//client reps single connection to postgres db

const SQL = `
CREATE TABLE IF NOT EXISTS usernames (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 )
);

INSERT INTO usernames (username) 
VALUES
  ('Bryan'),
  ('Odin'),
  ('Damon');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    //hash is %23
    connectionString:
      "postgresql://kratos:Soham%231345@localhost:5432/top_users",
  });
  await client.connect();
  //starts db connection
  await client.query(SQL);
  //runs the query
  await client.end();
  //closes db connection
  console.log("done");
}

main();

// You can then run this script via node db/populatedb.js,
// or add it as a script in package.json.

// Do note that the script is designed to be ran only once.
