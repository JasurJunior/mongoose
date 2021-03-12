import mongoose from 'mongoose'
// schema for mongodb
const Post = new mongoose.Schema(
    {
    author: String,
    title: String,
    content: String,
    picture: String
    })

export default mongoose.model('Post',Post)