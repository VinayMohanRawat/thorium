const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        required: true,
        unique: true
    },
    authorName: String,
    tags: [String],
    year: {
        type: String,
        default: 2021
    },
    totalPages: Number,
    isPublished: Boolean,
    prices: {
        indianPrice: String,
        europePrice: String
    },
    stockAvailable: Boolean
}, { timestamps: true });


module.exports = mongoose.model('booksCollection', bookSchema) //users


