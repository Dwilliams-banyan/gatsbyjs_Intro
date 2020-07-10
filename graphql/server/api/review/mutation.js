const Review = require("./review")
const Movie = require("../movie/movie")

const reviewMutation = {
    Mutation: {
        async addReview(obj, { review }) {
            try {
                // It goes through the Movie array it to see if that movie exists if it does it creates the review for that movie
                const movie =  await Movie.findById(review.movieId)
                if(movie){
                    await Review.create({
                        ...review
                    })
                    return movie
                }
            } catch (e) {
                console.error(e.message)
                return {
                    error: e.message
                }
            }
        }
    }
}


module.exports = reviewMutation