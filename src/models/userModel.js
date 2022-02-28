const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName : {
        type : String,
        unique : true,
        require : true
    },
    authorName : String,
    category : String,
    year : Number
    }, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema) //users



