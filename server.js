const {ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const express = require('express')
const bodyParser = require('body-parser');
const app = express();
const { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

const port = 4000


const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./resolvers');
const { MONGODB } = require('./config.js');



const server = new ApolloServer({
    typeDefs,
    resolvers,
}); 
mongoose.connect(MONGODB, { useNewUrlParser:true, useUnifiedTopology: true })

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
type Query {
    hello: String
}
`);
var root = {
    hello: () => {
    return 'Hello world!';
    },
};



// ApolloServer.applyMiddleware({app});

app.use('/graphql', graphqlHTTP({
schema: schema,
rootValue: root,
graphiql: true,
}));
app.listen({port:4000 }, ()=>
    console.log(`👮‍♀️ Server is running like flash at http://localhost:4000${server.graphqlPath}`)
)










// .then(() => {
//     console.log('Connected');
//     return server.listen({port: 4000});

// }).then(res => {
//     console.log(`Server is going live ${res.url}`)
// })







