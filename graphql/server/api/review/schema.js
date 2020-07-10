
const {gql} = require('apollo-server')

let Review = gql`
    type Review {
        _id: ID
        movieId: ID
        review: String
        error : String
    }

    input ReviewInput {
        _id : ID
        movieId : ID
        review : String
    }

    type Mutation {
        addReview(review: ReviewInput) : Movie
    } 
`

module.exports = Review