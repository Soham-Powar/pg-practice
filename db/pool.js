const { Pool } = require("pg");

// const { Pool } = require("pg");

// // All of the following properties should be read from environment variables
// // We're hardcoding them here for simplicity
// module.exports = new Pool({
//   host: "localhost", // or wherever the db is hosted
//   user: "<role_name>",
//   database: "top_users",
//   password: "<role_password>",
//   port: 5432, // The default port
// });

module.exports = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Again, this should be read from an environment variable
// module.exports = new Pool({
//   connectionString: "postgresql://kratos:Soham%231345@localhost:5432/top_users",
// });

//pool is pool of connections and it user any that
//is available
//can use pool.query directly
//or pool.connect returns a client
