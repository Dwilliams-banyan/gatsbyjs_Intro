const mongoose = require('mongoose')
const Schema = mongoose.Schema

// shows the way the information should be set up and looked like and type Of data used or looked for
const Review = new Schema({
    
    movieId : {
        type : String, 
        required : true
    },
    
    review : {
        type: String,
        required : true
    }
})

module.exports = mongoose.model("review",Review)




// let reviews = [
//     {
//         _id: "sm31",
//         movieId: "sm3",
//         review: "Scary Movie 3 is funny"
//     },
//     {
//         _id: "sm32",
//         movieId: "sm3",
//         review: "I didn't like this movie"
//     },
//     {
//         _id: "s41",
//         movieId: "s4",
//         review: "Saw 4 was horrible"
//     },
//     {
//         _id: "s42",
//         movieId: "s4",
//         review: "I couldn't follow the storyline at all"
//     },
//     {
//         _id: "pf1",
//         movieId: "pf",
//         review: "Pulp Fiction was amazing"
//     },
//     {
//         _id: "pf2",
//         movieId: "pf",
//         review: "Pulp Fiction is a wonderful movie."
//     },
//     {
//         _id: "kb21",
//         movieId: "kb2",
//         review: "Kill Bill was alright I liked the second one better"
//     },
//     {
//         _id: "kb22",
//         movieId: "kb2",
//         review: "Blah why did it take so long to hear her name?"
//     },
// ]
