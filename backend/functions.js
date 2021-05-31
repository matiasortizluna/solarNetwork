var MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/renewable_db";
const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
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
  