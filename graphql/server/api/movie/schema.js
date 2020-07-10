const {gql} = require("apollo-server");

const Movie = gql`
    type Movie {
        _id: ID
        name: String
        director: String
        headActor : String
        reviews: [Review]
        error: String
    }

    type Query {
        movies: [Movie]
        movie(_id : ID): Movie
    }

    input MovieInput {
        _id : ID
        name : String
        director : String
        headActor: String
     }

     input MovieID {
         _id : ID
     }

     type Mutation {
         addMovie(movie : MovieInput) : [Movie]
         removeMovie(movieId : MovieID) : [Movie]
     }

`

module.exports = Movie