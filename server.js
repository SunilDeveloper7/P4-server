const {ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');


const typeDefs =gql`
    type Query{
        sayHello:String!

    }
`

const resolvers ={
    Query: {
        sayHi:() => 'Namasta World!'
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
}); 

server.listen({port: 4000})
    .then(res => {
        console.log(`server is going live ${res.url}`)
    })




