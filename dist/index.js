"use strict";

var _typeorm = require("typeorm");

var _Post = require("./entity/Post");

var _Category = require("./entity/Category");

// connection settings are in the "ormconfig.json" file
(0, _typeorm.createConnection)().then(async function (connection) {

    var category1 = new _Category.Category();
    category1.name = "TypeScript";

    var category2 = new _Category.Category();
    category2.name = "Programming";

    var post = new _Post.Post();
    post.title = "tiitel";
    post.text = "hiiiiii";

    return connection.getRepository(_Post.Post).save(post).then(function (post) {
        console.log("Post has been saved: ", post);
    });
}).catch(function (error) {
    return console.log("Error: ", error);
});