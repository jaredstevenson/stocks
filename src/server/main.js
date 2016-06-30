import express from 'express';
import axios from 'axios';

var app = express();
var market = {
  fb: 100,
  goog: 200,
  aapl: 500
}
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin',"*")
  next();
})

app.get('/stock/:symbol', function(req, res) {
  // var stock = {
  //   symbol: req.params.symbol,
  //   price: market[req.params.symbol]
  // }
  // res.send(stock);
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

app.listen(3002, function () {
  console.log('Example app listening on port 3002!');
});
