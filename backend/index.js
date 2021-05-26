const http = require('http');
const express = require('express');
var mongo = require('mongodb');

const app = express();
const port = 8080;

var axios = require('axios')

const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

var MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/manrenewables_db";

const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/values', (req, res) => {
  res.send(
    {
      "batterVoltage": "0",
      "solarPanelVoltage": "1.3",
      "consumptionCurrent": "13",
      "produciongCurrent": "12",
    }
  );
});

app.get('/', (req, res) => {
  res.send('Hello World, this is our project of ESS. Polytechnic of Leiria.');
});

app.post('/payload', (req, res) => {
  let body = req.body
  try {
    let response = addEntry(body)
    res.send(response)
  } catch (err) {
    console.log(err)
  }
})

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))

function createCollection() {
  client.db("manrenewables_db").createCollection("manrenewables_collection", (err, res) => {
    if (err) {
      console.log(err)
    } else {
      console.log(res)
    }
  })
}

async function addEntry(payload) {
  await client.connect();
  await client.db("manrenewables_db").command({ ping: 1 });

  console.log("Connected successfully to Database");

  await client.db("manrenewables_db").collection("manrenewables_collection").insertOne(payload, function (err, res) {
    if (err) {
      console.log(err)
      return err
    } else {
      console.log(res)
      return res
    }
  })

  await client.db.close();
}