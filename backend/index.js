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
const url = "mongodb://localhost:27017/renewable_db";

var response

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
    response = addEntry(body)
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


app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))

function createCollection() {
  client.db("renewable_db").createCollection("renewable_db_collection", (err, res) => {
    if (err) {
      console.log(err)
    } else {
      console.log(res)
    }
  })
}

async function addEntry(payload) {
  await client.connect();
  await client.db("renewable_db").command({ ping: 1 });

  console.log("Connected successfully to Database");

  await client.db("renewable_db").collection("renewable_db_collection").insertOne(payload, function (err, res) {
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

async function readValues() {
  await client.connect();
  await client.db("renewable_db").command({ ping: 1 });

  await console.log("Connected successfully to Database");

  await client.db("renewable_db").collection("renewable_db_collection").find({}).toArray(function (err, res) {
    if (err) {
      console.log(err)
      return err
    } else {
      console.log("Read values from Database")
      console.log(res)
      response = res
      //return res
    }
  });

  await client.db.close;
}

function readLast() {
  client.connect();
  client.db("renewable_db").command({ ping: 1 });

  console.log("Connected successfully to Database");

  client.db("renewable_db").collection("renewable_db_collection").findOne({}, function (err, res) {
    if (err) {
      console.log(err);
      return err;
    } else {
      console.log("Read values from Database");
      console.log(res);
      response = res
      //return res;
    }
  })

  client.db.close;
}
