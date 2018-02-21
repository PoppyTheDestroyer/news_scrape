const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const axios = require("axios");
const cheerio = require("cheerio");

const db = require("./models");

const PORT = 3000;

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static("public"));

mongoose.Promise = Promise;
mongoose.connect