"use strict";

var _typeorm = require("typeorm");

var _Post = require("./entity/Post");

var _Category = require("./entity/Category");

// connection settings are in the "ormconfig.json" file
(0, _typeorm.createConnection)().then(async function (connection) {

  var postRepo = connection.getRepository(_Post.Post);

  await postRepo.delete({ id: 33 });
  connection.getRepository(_Post.Post).save(post);
}).catch(function (error) {
  return console.log("Error: ", error);
});