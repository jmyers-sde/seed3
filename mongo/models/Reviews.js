const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ReviewSchema = new Schema({
    name: String,
    rating: Number,
    comment: String,
},
    {
        timestamps: {}
    })

const Reviews = mongoose.model('Reviews', ReviewSchema)

module.exports = { Reviews, ReviewSchema }