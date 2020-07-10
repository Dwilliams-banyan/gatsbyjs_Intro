const Movie = require("./movie")

const movieMutation = {
    // Mutation is the field
    Mutation: {
        //addMovie is the subfield
        async addMovie(obj, { movie }) {
            try{
                await Movie.create({
                    ...movie
                })
                return await Movie.find()

            }catch(e){

                console.error(e.message)

                return {
                    error: e.message
                    
                }
            }
        },

        async removeMovie(obj, {_id}){
            try{
                await Movie.deleteOne( _id)
                return  await Movie.find()
            }catch(e){
                console.error(e.message)
                return {
                    error : "removal was unsucessful because : " + e.message
                }
            }
        }
    }
}

module.exports = movieMutation