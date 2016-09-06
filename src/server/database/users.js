var Promise = require("bluebird");
var Mongodb = require("mongodb");

export function create(connection, user) {
  return connection.collection("users").insert(user);
}
export function getAll(connection) {

  return connection.collection("users").find().toArray();
}

///get this working
export function getOne(connection, username) {
  //var id = Mongodb.ObjectId(userId);
  return connection.collection("users").findOne({"username": username});
}

export function update(connection, username, user) {
  //var id = Mongodb.ObjectId(userId);
  delete user["_id"]
  console.log("update getting called", user);
  return connection.collection("users").findAndModify({"username": username}, ["username", username ], user, {remove: false});
}
