import {createConnection} from "typeorm";
import {Post} from "./entity/Post";
import {Category} from "./entity/Category";

// connection settings are in the "ormconfig.json" file
createConnection().then(async connection => {

// UUS POST
const post = new Post();
post.title = "dsadasd";
post.text = "dsadasd";

const postRepo = connection.getRepository(Post);


// DELETE
await postRepo.delete({id : 33});


// UPDATE
await postRepo.update(21, {title: "adassd"});

// SAVE
connection.getRepository(Post).save(post);

}).catch(error => console.log("Error: ", error));