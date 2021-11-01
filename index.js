const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000;
const contacts = require('./server/mockContacts');

const API_BASE_URL = "/api";

express()
  .use(express.static(path.join(__dirname, 'public')))
  // .set('views', path.join(__dirname, 'server/views'))
  // .set('view engine', 'ejs')
  // .get('/', (req, res) => res.render('pages/index'))
  .post(API_BASE_URL + '/contacts', (req, res) => {
    return res.send(contacts)
  })
  .get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
