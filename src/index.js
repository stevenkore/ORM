import {createConnection} from "typeorm";
import {Post} from "./entity/Post";
import {Category} from "./entity/Category";

// connection settings are in the "ormconfig.json" file
createConnection().then(async connection => {

const postRepo = connection.getRepository(Post);

await postRepo.delete({id : 33});
connection.getRepository(Post).save(post);

}).catch(error => console.log("Error: ", error));