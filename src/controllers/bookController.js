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

const getParticularBooks = async function (req, res) {
    let data= req.body
    // console.log(data)

    let  getParticularBooks = await BookModel.find( {
        
       $or: [{ authorName : data.authorName },{bookName : data.bookName}, {year : data.year}, {prices: data.prices}, {stockAvailable : data.stockAvailable} ] 
        
     } )
    res.send({msg: getParticularBooks})
}

const getXINRBooks = async function (req, res) {

    let getXINRBook = await BookModel.find( {
        "prices.indianPrice" : {$in :["100INR","200INR","500INR"]}
        
     } )
    res.send({msg: getXINRBook})
}

const getRandomBooks = async function (req, res) {

    let getRandomBooks = await BookModel.find( {
        $or : [{totalPages:{$gt : 500}},{stockAvailable:{$eq:true}}]
        
     } )
    res.send({msg: getRandomBooks})
    
    }

module.exports.createBook= createBook

module.exports.bookList = bookList

module.exports.getBooksInYear = getBooksInYear

module.exports.getParticularBooks = getParticularBooks

module.exports.getXINRBooks = getXINRBooks

module.exports.getRandomBooks = getRandomBooks 



