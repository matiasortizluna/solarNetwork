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

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));

const importedFunctions = require('./functions.js')

app.get('/', (req, res) => {
  res.send('Hello World, this is our project of ESS. Polytechnic of Leiria.');
});


function createCollection() {
  client.db("renewable_db").createCollection("renewable_db_collection", (err, res) => {
    if (err) {
      console.log(err)
    } else {
      console.log(res)
    }
  })
}

function addEntry(payload) {
  client.connect();
  client.db("renewable_db").command({ ping: 1 });

  console.log("Connected successfully to Database");

  client.db("renewable_db").collection("renewable_db_collection").insertOne(payload, function (err, res) {
    if (err) {
      console.log(err)
      return err
    } else {
      console.log(res)
      return res
    }
  })

  client.db.close;
}

function readValues() {
  client.connect();
  client.db("renewable_db").command({ ping: 1 });

  console.log("Connected successfully to Database");

  client.db("renewable_db").collection("renewable_db_collection").find({}).toArray(function (err, res) {
    if (err) {
      console.log(err)
      return err
    } else {
      console.log("Read values from Database")
      console.log(res)
      response = res
      return res
    }
  });

  client.db.close;
}

function readLast() {
  client.connect();
  client.db("renewable_db").command({ ping: 1 });

  console.log("Connected successfully to Database");

  client.db("renewable_db").collection("renewable_db_collection").find({}).toArray(function (err, res) {
    if (err) {
      console.log(err);
      return err;
    } else {
      console.log("Read values from Database");
      console.log(res);
      response = res[res.length - 1]
      return res;
    }
  })

  client.db.close;
}

function readMonths() {
  client.connect();
  client.db("renewable_db").command({ ping: 1 });

  console.log("Connected successfully to Database");

  let result = client.db("renewable_db").collection("renewable_db_collection").distinct('date.month').then((res) => {
    console.log(res)
    response = res
    return res
  }).catch((err) => {
    console.log(err)
    return err
  })

  client.db.close;
}

function readYears() {
  client.connect();
  client.db("renewable_db").command({ ping: 1 });

  console.log("Connected successfully to Database");

  let result = client.db("renewable_db").collection("renewable_db_collection").distinct('date.year').then((res) => {
    console.log(res)
    response = res
    return res
  }).catch((err) => {
    console.log(err)
    return err
  })

  client.db.close;
}

//Read all data in the database
app.get('/months', (req, res) => {
  try {
    setTimeout(() => {
      response = readMonths()
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


//Read all data in the database
app.get('/years', (req, res) => {
  try {
    setTimeout(() => {
      response = readYears()
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

//Add an entry to the database
app.post('/payload', (req, res) => {
  let body = req.body
  /*let body = [{
    battery_voltage: 12,
    solar_panel_voltage: 12,
    consumption_current: 0.22,
    producing_current: 0.42,
    full_date: '2021-05-31 2:58:43',
    date: {
      year: '2021',
      day: '31',
      month: '05',
      hour: '02',
      minute: '58',
      second: '43'
    }
  }*/
  console.log(req.body)
  try {
    response = addEntry(body)
    res.send(response)
  } catch (err) {
    console.log(err)
  }
})

//Read the most recent entry in database
app.get('/payload', (req, res) => {
  try {
    setTimeout(() => {
      response = readLast()
      /*
      response = {
        battery_voltage: 15,
        solar_panel_voltage: 15,
        consumption_current: 0.25,
        producing_current: 0.45,
        full_date: '2021-05-31 2:58:43',
        date: {
          year: '2021',
          day: '31',
          month: '05',
          hour: '02',
          minute: '58',
          second: '43'
        }
      }
      */

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

//Read all data in the database
app.get('/payload/all', (req, res) => {
  try {
    setTimeout(() => {
      response = readValues()
      /*
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
      */
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
