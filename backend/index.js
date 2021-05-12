const http = require('http');
const express = require('express');

const app = express();
const port = 8080;

const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World, this is our project of ESS. Polytechnic of Leiria.');
});

app.post('/payload', (req, res) => {
  //let headers = req.headers
  //console.log(headers)
  let body = req.body
  console.log(body)

  const postData = JSON.stringify({
    todo: 'Buy the milk',
    body: body
  })
  //const options = new URL('http://192.168.4.1/test')

  const options = {
    host: '192.168.4.1',
    port: 80,
    path: '/test',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(postData)
    }
  };

  const reqHttp = http.request(options, (res) => {
    //console.log(`STATUS: ${res.statusCode}`);
    //console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
    //res.setEncoding('utf8');
    res.on('data', (chunk) => {
      console.log(`BODY: ${chunk}`);
    });
    res.on('end', () => {
      console.log('No more data in response.');
    });
  });

  reqHttp.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
  });

  reqHttp.write(postData);
  reqHttp.end();


  let responseData = "Got your info, now go to sleep ;)"
  res.send(responseData)

})


app.post('/test', (req, res) => {
  //console.log(req.body)
  //console.log(res)
  var data = 'Response from Endpoint test in Server'
  res.send(data)
})


app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))


/*
    axios.post("http://192.168.4.1/test", {
        body
        //everything here is the body of the application
    }, {
        headers: {
            'X-Auth-Token': headers['x-token']
        }
    })
        .then((resp) => {
            console.log(resp);
            res.send(resp.data)
        })
        .catch((err) => {
            if (err.response == undefined) {
                res.status(400).send({ message: "Error on Server Side", data: err })
            }
            else {
                res.status(err.response.status).send({ message: err.response.statusText })
            }
        })
        */