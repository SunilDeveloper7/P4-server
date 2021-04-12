const {ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');
const mongoose = require('mongoose');

const { MONGODB } = require('./config.js');


const typeDefs =gql`
    type Post {
        id: ID!
        body:String!
        createdAt:String!
        username:String!

    }
    type Query {
        getPosts:[Post]
    }
`;

const resolvers ={
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

const server = new ApolloServer({
    typeDefs,
    resolvers
}); 
mongoose.connect(MONGODB, { useNewUrlParser:true})
.then(() => {
    console.log('Connected');
    return server.listen({port: PORT});

}).then(res => {
    console.log(`Server is going live ${res.url}`)
})
    




