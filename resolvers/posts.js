const Post = require('../models/Post');

module.exports = {
    Query: {
        async getPosts() {
            try{
                const posts =await postMessage.find();
                return posts;
            }catch(err) {
                throw new Error(err);
            }
        }
    }
}