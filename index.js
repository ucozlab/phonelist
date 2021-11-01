const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000;

const API_BASE_URL = "/api";

express()
  .use(express.static(path.join(__dirname, 'public')))
  // .set('views', path.join(__dirname, 'server/views'))
  // .set('view engine', 'ejs')
  // .get('/', (req, res) => res.render('pages/index'))
  .post(API_BASE_URL + '/contacts', (req, res) => {
    return res.send([{
      id: 1,
      image: "",
      countryCode: "+38",
      phone: "0631208277",
      name: "Artem"
    }])
  })
  .get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
