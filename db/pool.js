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
  host: "localhost",
  user: "kratos",
  database: "top_users",
  password: "Soham#1345",
  port: 5432,
});

// Again, this should be read from an environment variable
// module.exports = new Pool({
//   connectionString: "postgresql://kratos:Soham%231345@localhost:5432/top_users",
// });
