var Promise = require("bluebird");
var url = 'mongodb://localhost:27017/stocks';
var Mongodb = Promise.promisifyAll(require("mongodb"));
var MongoClient = Promise.promisifyAll(Mongodb.MongoClient);


export function connect(){
  return MongoClient.connectAsync(url);

}
