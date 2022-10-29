// DEPENDENCIES
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const userController = require("./controllers/users")
const User = require('./models/user.js');
const bcrypt = require("bcrypt")
// Dependencies
const session = require("express-session");



require('dotenv').config();
const PORT = process.env.PORT;
mongoose.connect(process.env.DATABASE_URL, {});

// DATABASE CONNECTION ERR/SUCCESS
const db = mongoose.connection;
db.on("error", (err) => console.log(err.message + " is mongo not running?"));
db.on("connected", () => console.log("mongo No5"));
db.on("disconnected", () => console.log("mongo disconnected"));

//MIDDLEWARE
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use("/users", userController);
// Middleware
app.use(
    session({
      secret: process.env.SECRET,
      resave: false,
      saveUninitialized: false,
    })
  )

app.listen(PORT, () =>
    console.log("this is halloween"))

    // Routes / Controllers

app.use("/users", userController)