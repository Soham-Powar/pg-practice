exports.usernamesGet = (req, res) => {
  console.log("usernames will be logged here - wip");
  res.send("all usernames");
};

exports.usernamesNewGet = (req, res) => {
  res.render("addUsername", { title: "Add new Username" });
};

exports.usernamesNewPost = (req, res) => {
  console.log("username to be saved: ", req.body.username);
};
