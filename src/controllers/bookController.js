const BookModel= require("../models/bookModel")
const AuthorModel = require("../models/authorModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const createAuthor= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBookByAnAuthor = async function (req, res) {

    let Data = await AuthorModel.find({name : "Chetan Bhagat"})
    let id = Data[0].author_id
    const booksName = await BookModel.find({author_id: id}).select({name:1, _id:0})
    res.send({msg:booksName})
}

const getUpdatePrice = async function (req, res) {

        let Data = await BookModel.find({name:"Two states"})
        // console.log(Data)
    let id = Data[0].author_id
    const authorName = await AuthorModel.find({author_id : id}).select({author_name:1,_id:0})

    const newName = Data[0].name
    const updatedPrice = await BookModel.findOneAndUpdate({name:newName}, {price:100},{new:true}).select({price:1, _id:0})
    res.send({msg:authorName, updatedPrice})
    }


const authorsName = async function (req,res) {
    const booksId= await BookModel.find({price: {$gte:50, $lte:100}}).select({author_id:1, _id:0})
    const id = booksId.map(inp => inp.author_id)

    let temp =[]
    for(let i=0; i<id.length; i++) {
        let x = id[i]
        const author = await AuthorModel.find({author_id:x}).select({author_name:1, _id:0})
        temp.push(author)
    }

   const authorName = temp.flat()

  res.send({msg:authorName})
}



module.exports.createBook= createBook
module.exports.createAuthor = createAuthor
module.exports.getBookByAnAuthor = getBookByAnAuthor
module.exports.getUpdatePrice = getUpdatePrice
module.exports.authorsName = authorsName






// const getBooksData= async function (req, res) {
//     let allBooks= await BookModel.find( {authorName : "HO" } )
//     console.log(allBooks)
//     if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
//     else res.send({msg: "No books found" , condition: false})
// }


// const updateBooks= async function (req, res) {
//     let data = req.body // {sales: "1200"}
//     // let allBooks= await BookModel.updateMany( 
//     //     { author: "SK"} , //condition
//     //     { $set: data } //update in data
//     //  )
//     let allBooks= await BookModel.findOneAndUpdate( 
//         { authorName: "ABC"} , //condition
//         { $set: data }, //update in data
//         { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
//      )
     
//      res.send( { msg: allBooks})
// }

// const deleteBooks= async function (req, res) {
//     // let data = req.body 
//     let allBooks= await BookModel.updateMany( 
//         { authorName: "FI"} , //condition
//         { $set: {isDeleted: true} }, //update in data
//         { new: true } ,
//      )
     
//      res.send( { msg: allBooks})
// }




// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE



