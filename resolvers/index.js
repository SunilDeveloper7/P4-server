const postResolvers = require('./posts')
const usersResolvers = require('./users')

module.exports = {
    Query: {
        ...postsResolvers.query
        
    }
}