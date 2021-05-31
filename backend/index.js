const http = require('http');
const express = require('express');
var mongo = require('mongodb');

const app = express();
const port = 8080;

var axios = require('axios')

const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept');
  next();
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));

const importedFunctions = require('./functions.js')

app.get('/', (req, res) => {
  res.send('Hello World, this is our project of ESS. Polytechnic of Leiria.');
});

app.post('/payload', (req, res) => {
  //let body = req.body
  let body = [{
    hello: 'true',
    full_date: '2021-05-26 12:51:08',
    date: {
      year: '2021',
      day: '26',
      month: '05',
      hour: '12',
      minute: '51',
      second: '08'
    }
  }]
  try {
    response = importedFunctions.addEntry(body)
    res.send(response)
  } catch (err) {
    console.log(err)
  }
})

app.get('/payload', (req, res) => {
  try {
    setTimeout(() => {
      //readLast()

      response = {
        hello: 'true',
        full_date: '2021-05-26 12:51:08',
        date: {
          year: '2021',
          day: '26',
          month: '05',
          hour: '12',
          minute: '51',
          second: '08'
        }
      }
      setTimeout(() => {
        console.log("What's gonna be sent back to client")
        console.log(response)
        res.send(response)
      }, 500)
    }, 500)
  } catch (err) {
    console.log(err)
  }
});

app.get('/payload/all', (req, res) => {
  try {
    setTimeout(() => {
      //readValues()
      response = [{
        hello: 'true',
        full_date: '2021-05-26 12:51:08',
        date: {
          year: '2021',
          day: '26',
          month: '05',
          hour: '12',
          minute: '51',
          second: '08'
        }
      }, {
        hello: 'true',
        full_date: '2021-05-26 12:51:08',
        date: {
          year: '2021',
          day: '26',
          month: '05',
          hour: '12',
          minute: '51',
          second: '08'
        }
      }, {
        hello: 'true',
        full_date: '2021-05-26 12:51:08',
        date: {
          year: '2021',
          day: '26',
          month: '05',
          hour: '12',
          minute: '51',
          second: '08'
        }
      }]
      setTimeout(() => {
        console.log("What's gonna be sent back to client")
        console.log(response)
        res.send(response)
      }, 500)
    }, 500)



  } catch (err) {
    console.log(err)
  }
});