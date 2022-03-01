const { count } = require("console")
const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const bookList= async function (req, res) {

    let bookList = await BookModel.find().select({bookName:1, authorName : 1, _id : 0})
    res.send({msg: bookList})
}

const getBooksInYear = async function (req, res) {
    let data= req.query.year
    console.log(data)

    let getBooksInYear = await BookModel.find({year : data}).select({bookName:1, year:1, _id:0})
    res.send({msg: getBooksInYear})
}



module.exports.createBook= createBook
module.exports.bookList = bookList
module.exports.getBooksInYear = getBooksInYear
// module.exports.getBooksData= getBooksData