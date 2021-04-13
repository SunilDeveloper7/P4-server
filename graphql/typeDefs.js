const { gql } = require('apollo-server')
const gql = require('graphql-tag');
const mongoose = require('mongoose');

const typeDefs = require('./graphql/typeDefs');
const Post = require('./models/Post');
const { MONGODB } = require('./config.js.js.js');



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