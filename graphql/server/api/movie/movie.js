const mongoose = require('mongoose')
const Schema = mongoose.Schema

// shows the way the information should be set up and looked like and type Of data used or looked for
const Movie = new Schema({
    name: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    headActor: {
        type: String,
        required: true
    }

})



module.exports = mongoose.model('movie', Movie)







/*
 let movies = [
    {
        name: 'Scary Movie 3',
        director: "Mark Pepper",
        _id: 'sm3',
        headActor: "Phil"
    },

    {
        name: "Saw IV",
        director: "Willie Wells",
        _id: "s4",
        headActor: "Evil Guy"
    },

    {

        name: "Pulp Fiction",
        director: "Drew McInterier",
        _id: "pf",
        headActor: "Samual L. Jackson"
    },

    {
        name: "Kill Bill",
        director: "Bill Gates",
        _id: "kb2",
        headActor: "Anna Fey"
    }
]
 */