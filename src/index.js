import {createConnection} from "typeorm";
import {Post} from "./entity/Post";
import {Category} from "./entity/Category";

// connection settings are in the "ormconfig.json" file
createConnection().then(async connection => {

    const category1 = new Category();
    category1.name = "TypeScript";

    const category2 = new Category();
    category2.name = "Programming";

    const post = new Post();
    post.title = "tiitel";
    post.text = "hiiiiii";

    return connection
        .getRepository(Post)
        .save(post)
        .then(post => {
            console.log("Post has been saved: ", post);
        });

}).catch(error => console.log("Error: ", error));
