var Promise = require("bluebird");
var Mongodb = require("mongodb");

export function create(connection, user) {
  return connection.collection("users").insert(user);
}
export function getAll(connection) {

  return connection.collection("users").find().toArray();
}

export function getOne(connection, userId) {
  //var id = Mongodb.ObjectId(userId);
  return connection.collection("users").findOne({"id": userId});
}

export function update(connection, userId, user) {
  //var id = Mongodb.ObjectId(userId);
  return connection.collection("users").update({"id": userId}, user);
}
