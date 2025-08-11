const db = require("../db/query");

exports.usernamesGet = async (req, res) => {
  const usernames = await db.getAllUsernames();
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
