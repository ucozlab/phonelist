const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");

const {API_BASE_URL} = require("../config");
const contactsRouter = require("./routes/contactsRoutes");

const app = express();

const publicFolder = path.join(__dirname, '../public');

app.use(express.static(publicFolder));

app.use(bodyParser.urlencoded({ // this receives request body correctly
  extended: true
}));

app.use(bodyParser.json());

app.use(API_BASE_URL, contactsRouter);

app.get('/', function (req, res) {
  res.sendFile(path.join(publicFolder, 'index.html'));
})

module.exports = app;
