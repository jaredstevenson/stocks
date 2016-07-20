import express from 'express';
import axios from 'axios';
import { connect } from './database/connect.js';
import * as users from './database/users.js';
import { join } from 'path';
import * as bodyParser from 'body-parser';

var app = express();
var connection;

var market = {
  fb: 100,
  goog: 200,
  aapl: 500
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));


app.post('/users', function (req, res){
  users.create(connection, req.body)
  .then(function(result){
    res.send(result)
  })
});



app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin',"*")
  next();
})

app.put('/users/:id', function(req, res){
  users.update(connection, req.params.id, req.body)
  .then(function() {res.send(200)})
})

app.get('/users', function (req, res){
  users.getAll(connection).then(function(us){res.send(us)});
});

app.get('/users/:id', function(req, res){
  users.getOne(connection, req.params.id)
  .then(function(user) {

    res.send(user)
  })

})



app.get('/stock/:symbol', function(req, res) {

  axios.get('http://dev.markitondemand.com/MODApis/Api/v2/Quote/json?symbol=' + req.params.symbol)
    .then(function (response) {
      var stock = {
        symbol: response.data.Symbol,
        price: response.data.LastPrice

      };

      res.send(stock);
    })
})

app.get('/', function (req, res) {
  res.send(market);
});




connect().then(function(db) {
  connection = db;
  app.listen(3002, function () {
    console.log('Stocks server is running on port 3002!');
  });
});
