require('dotenv').config()
const {ApolloServer, gql} = require('apollo-server')
let notes = [
    {
        content: 'Make Dinner',
        _id: 'l33p'
    },
    {
        content: 'Take a Nap',
        _id : '4l3x'
    },
    {
        content: 'Run leviathan',
        _id: 'D3st1ny'
    }
]
const typeDefs = gql`
    type Note {
        _id: ID
        content: String
        number: Int
    }
    type Query {
        hello: String
        notes: [Note]
        note(_id: ID): Note
    }
    input NoteInput {
        _id: ID
        content: String
    }
    type Mutation {
        addNote(note: NoteInput): [Note]
    }
`
const resolvers = {
    Query: {
        hello(){
            return 'Hello World'
        },
        notes(){
            return notes
        },
        note(obj, {_id}){
            return notes.find(note => note._id === _id)
        }
    },
    Note: {
        number({content}, args){
            return content.length
        }
    },
    Mutation: {
        addNote(obj, {note}){
            console.log(note)
            notes.push(note)
            return notes
        }
    }
}
// const typeDefs = gql`
//     type Note {
//         _id: ID
//         content: String
//         length: Int
//     }
//     input NoteInput {
//         _id: ID
//         content: String
//     }
//     type Mutation {
//         addNote(note: NoteInput): [Note]
//     }
//     type Query {
//         hello: String
//         notes: [Note]
//         note(_id: ID) : Note
//     }
// `
// const resolvers = {
//     Query: {
//         hello(){
//             return 'Hello World'
//         },
//         notes(){
//             return notes
//         },
//         note(obj, {_id}){
//             return notes.find(note => note._id === _id)
//         }
//     },
//     Note: {
//         length({_id}, args){
//             const note = notes.find(note => note._id === _id)
//             return note.content.length
//         }
//     },
//     Mutation: {
//         addNote(obj, {note}){
//             notes.push(note)
//             return notes
//         }
//     }
// }
// const server = new ApolloServer({
//     typeDefs,
//     resolvers,
//     introspection: true,
//     playground: true,
//     context: ({req}) => {
//         return {}
//     }
// })
// server.listen({
//     port: process.env.PORT
// }).then(({url}) => console.log(`Server started at ${url}`))