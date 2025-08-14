const db = require("../db/query");

exports.usernamesGet = async (req, res) => {
  const searchTerm = req.query.search || "";
  const usernames = await db.getAllUsernames(searchTerm);
  res.send("Usernames: " + usernames.map((user) => user.username).join(", "));
};

exports.usernamesNewGet = (req, res) => {
  res.render("addUsername", { title: "Add new Username" });
};

exports.usernamesNewPost = async (req, res) => {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
};

exports.usernamesDeleteGet = async (req, res) => {
  await db.deleteAllUsernames();
  res.redirect("/");
};
