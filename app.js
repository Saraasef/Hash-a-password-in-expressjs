const express = require("express");
const http = require("http");
const path = require("path");

const app = express();
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
mongoose.connect("mongodb://127.0.0.1/TaskmangerDB", (error) => {
  if (!error) console.log("connected to mongodb ... ");
});

const allusers = require("./users");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/users", allusers);

http.createServer(app).listen(3005, () => {
  console.log("server is running on 3005");
});
