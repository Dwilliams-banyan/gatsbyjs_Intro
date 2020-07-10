const Movie = require("./movie")
const Review = require("../review/review")


let movieResolvers = {
    Query: {
        async movies() {
            try{

                return await Movie.find()    
                
            }catch(e){
                console.error(e.message)
                return []
            }
        },

        async movie(obj, { _id }) {
            // runs through the array and find a id that matches and spit out that movie object
            try {
                return await Movie.findById(_id) 
            } catch (e) {
                console.error(e.message)
                return {}
            }
        }
    },

    Movie: {
        async reviews({_id}, args) {
            // run through the array and return all the objects that movie Id matches and returns an array of objects
            try {
                return await Review.find({
                    movieId : _id
                })
            } catch (e) {
                console.error(e.message)
                return []
            }
        }
    }
}

module.exports = movieResolvers