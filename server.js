const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const keys = require("./config/keys/json");

//runs an instance of express, bound to app
const app = express();

//Bodyparser middleware to read json
app.use(bodyParser.json());

//allows us to access our database on mLab
const db = keys.mongoURI;

//connects to mLab
mongoose
  .connect(db)
  .then(() => console.log(`MongoDB connected...`))
  .catch(err => console.log(err));

//port declaration
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
