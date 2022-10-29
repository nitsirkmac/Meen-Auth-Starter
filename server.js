const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');

require('dotenv').config();
const PORT = process.env.PORT;
mongoose.connect(process.env.DATABASE_URL, {});

const db = mongoose.connection;
db.on("error", (err) => console.log(err.message + " is mongo not running?"));
db.on("connected", () => console.log("mongo No5"));
db.on("disconnected", () => console.log("mongo disconnected"));

app.listen(PORT, () =>
    console.log("this is halloween"))