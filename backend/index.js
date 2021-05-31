const http = require('http');
const express = require('express');
var mongo = require('mongodb');

const app = express();
const port = 8080;

var axios = require('axios')

const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//------------------ DATABASE (CONFIG) --------------------------------------
var MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/renewable_db";
const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
//------------------------------------------------------------------------

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

//------------------ LER ULTIMO REGISTRO DA BD  --------------------------------------
//Function that reads the most recent entry in database
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
//Endpoint to read the most recent entry in database
app.get('/payload', (req, res) => {
  try {
    setTimeout(() => {
      // If Databse configured
      response = readLast()
      // If NO Databse configured
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

//------------------ LER OS MESES DOS REGISTROS DA BD  --------------------------------------
//Function that reads all the months existing in the data from the database
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
//Endpoint to read all the months existing in the data from the database
app.get('/months', (req, res) => {
  try {
    setTimeout(() => {
      // If Databse configured
      response = readMonths()
      // If NO Databse configured
      /*
      response = ['05','06','11']
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

//------------------ LER OS ANOS DOS REGISTROS DA BD  --------------------------------------
//Function that reads all the years existing in the data from the database
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
//Function to read all the months existing in the data from the database
app.get('/years', (req, res) => {
  try {
    setTimeout(() => {
      // If Databse configured
      response = readYears()
      // If NO Databse configured
      /*
      response = ['2021','2020','2019']
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

//------------------ LER REGISTROS DE ACORDO COM A DATA  --------------------------------------
//Function that reads data according to date, calculates the mean
function readDataByDate(dia, mes, ano) {
  client.connect();
  client.db("renewable_db").command({ ping: 1 });

  console.log("Connected successfully to Database");
  console.log(dia + " " + mes + " " + ano)

  let result = client.db("renewable_db").collection("renewable_db_collection").find({
    $or: [
      { 'date.year': { $in: [ano] } },
      { 'date.month': { $in: [mes] } },
      { 'date.dia': { $in: [dia] } }]
  }).toArray(function (err, res) {
    if (err) {
      console.log(err);
      return err;
    } else {
      console.log("Read values from Database");
      console.log(res);

      var media = {
        consumed: 0,
        produced: 0
      };
      var index = 0;
      res.forEach(object => {
        media.consumed += parseFloat(object.consumption_current)
        media.produced += parseFloat(object.producing_current)
        index++;
      });
      media.consumed = media.consumed / index
      media.produced = media.produced / index
      console.log(media)
      response = media
      return media;
    }
  })

  client.db.close;
}
//Endpoint that reads data according to date, calculates the mean
app.get('/values/:dia/:mes/:ano', (req, res) => {
  console.log(req.params)
  try {
    setTimeout(() => {
      // If Databse configured
      response = readDataByDate(req.params.dia, req.params.mes, req.params.ano)
      // If NO Databse configured
      //response = { consumed: 0.22, produced: 0.43 }
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


//----------------- NOT SO NECESSARY BUT HELPFULL ---------------------------

//------------------ LER TODOS OS REGISTROS DA BD  --------------------------------------
//Function that reads all data from the database
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
//Endpoint to read all data from the database
app.get('/payload/all', (req, res) => {
  try {
    setTimeout(() => {
      // If Databse configured
      response = readValues()
      // If NO Databse configured
      /*
      response = [
        {
          _id: 60b4f7f87bcfb8042ffef239,
          battery_voltage: 13,
          solar_panel_voltage: 13,
          consumption_current: 0.23,
          producing_current: 0.43,
          full_date: '2021-05-31 2:58:43',
          date: {
            year: '2021',
            day: '31',
            month: '05',
            hour: '02',
            minute: '58',
            second: '43'
          }
        },
        {
          _id: 60b50bf6fb30cc0d4dc10455,
          battery_voltage: 14,
          solar_panel_voltage: 14,
          consumption_current: 0.24,
          producing_current: 0.44,
          full_date: '2021-05-31 2:58:43',
          date: {
            year: '2021',
            day: '31',
            month: '05',
            hour: '02',
            minute: '59',
            second: '23'
          }
        },
        {
          _id: 60b50bfcfb30cc0d4dc10456,
          battery_voltage: 15,
          solar_panel_voltage: 15,
          consumption_current: 0.25,
          producing_current: 0.45,
          full_date: '2021-05-31 2:58:43',
          date: {
            year: '2021',
            day: '31',
            month: '05',
            hour: '03',
            minute: '01',
            second: '12'
          }
        }
      ]
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

//------------------ CRIAR REGISTROS NA BD  --------------------------------------
//Function that adds an entry to the database
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
//Endpoint to add an entry to the database
app.post('/payload', (req, res) => {
  // If Databse configured
  let body = req.body
  // If NO Databse configured
  /*
  let body = {
    battery_voltage: 16,
    solar_panel_voltage: 16,
    consumption_current: 0.26,
    producing_current: 0.46,
    full_date: '2021-05-31 2:58:43',
    date: {
      year: '2021',
      day: '31',
      month: '05',
      hour: '03',
      minute: '23',
      second: '12'
    }
  }
  */
  console.log(body)
  try {
    response = addEntry(body)
    res.send(response)
  } catch (err) {
    console.log(err)
  }
})

//------------------ CREATE COLLECTION NA BD --------------------------------------
//Function that creates a new collection on the database
function createCollection() {
  client.db("renewable_db").createCollection("renewable_db_collection", (err, res) => {
    if (err) {
      console.log(err)
    } else {
      console.log(res)
    }
  })
}