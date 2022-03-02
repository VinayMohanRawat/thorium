const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
   
        name : String,
        author_id : Number,
        price : Number,
        rating: {
            type : String,
            default : 4.5
        }
}, { timestamps: true })

module.exports = mongoose.model('Book', bookSchema) 