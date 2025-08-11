const express = require("express");
const path = require("node:path");
const usernamesRouter = require("./routes/usernamesRouter");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: true }));

app.use("/", usernamesRouter);

const PORT = 3023;
app.listen(PORT, () => {
  console.log("here we go");
});
