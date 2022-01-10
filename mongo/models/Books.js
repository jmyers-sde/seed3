const mongoose = require('mongoose')
const { ReviewSchema } = require('./Reviews')

const Schema = mongoose.Schema

const BooksSchema = new Schema({
    title: String,
    author: String,
    genre: String,
    reviews: [ReviewSchema]
},
    { timestamps: {} })

const Books = mongoose.model('Books', BooksSchema)

module.exports = Books