require('dotenv').config()
const { ApolloServer} = require('apollo-server')
const mongoose = require('mongoose')
const {mergeTypeDefs, mergeResolvers} = require('@graphql-tools/merge')
const Review = require("./api/review/schema")
const Movie = require("./api/movie/schema")
const movieResolvers = require("./api/movie/resolver")
const movieMutation = require('./api/movie/mutation')
const reviewMutation = require('./api/review/mutation')
 

let typeDefs = mergeTypeDefs([
    Movie,
    Review
])

let resolvers = mergeResolvers([
    movieResolvers,
    reviewMutation,
    movieMutation
])

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser:true, useUnifiedTopology:true})

const connection = mongoose.connection

connection.on('error', console.error.bind(console, 'connection error: '))


const server = new ApolloServer({
    typeDefs,
    resolvers
})

connection.once('open', () => {
    console.log('database connected')
    server.listen(process.env.PORT, () => {
        console.log(`server running on PORT ${process.env.PORT}`)
    }).then(({url}) => console.log(`Server started at ${url}`))
})


// server.listen({
//     port: 4000
// }).then(({ url }) => console.log(`Server started at ${url}`))

// An array of movies



// An array of reviews




// Each movie has a id, name, director, a headActor, and an array of reviews
// Each review has a id, a movieId, and a review which is a string

// The schema that the user/client can query
// this is not a js object
// const typeDefs = gql`
//     type Review {
//         _id: ID
//         movieId: ID
//         review: String
//     }


//     type Query {
//         movies: [Movie]
//         movie(_id : ID): Movie
//     }

//     input MovieInput {
//         _id : ID
//         name : String
//         director : String
//         headActor: String
//      }

//     input ReviewInput {
//         _id : ID
//         movieId : ID
//         review : String
//     }

//     type Mutation {
//         addReview(review: ReviewInput) : Movie
//         addMovie(movie: MovieInput) : [Movie]
//     }  
// `
// // this tell what data apolloServer should use when the query is called 
// const resolvers = {
//     Query: {
//         movies() {
//             return movies
//         },

//         movie(obj, { _id }) {
//             // runs through the array and find a id that matches and spit out that movie object
//             return movies.find(movie => movie._id === _id)
//         }
//     },

//     Movie: {
//         reviews({_id}, args) {
//             // run through the array and return all the objects that movie Id matches and returns an array of objects
//             return reviews.filter(review => review.movieId == _id)
//         }
//     },

//     Mutation: {
//         // the review is the information you are trying to add
//         addReview(obj, { review }) {
//             console.log(review)
//             reviews.push(review)
//             return movies.find(movie => movie._id === review.movieId)
//         },

//         addMovie(obj, { movie }) {
//             console.log(movie)
//             movies.push(movie)
//             return movies
//         }
//     }

// }
