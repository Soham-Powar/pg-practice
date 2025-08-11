exports.usernamesGet = (req, res) => {
  console.log("usernames will be logged here - wip");
  res.send("all usernames");
};

exports.usernamesNewGet = (req, res) => {
  res.send("form sent");
};

exports.usernamesNewPost = (req, res) => {
  console.log("username to be saved: ", req.body.username);
};
