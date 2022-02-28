const UserModel= require("../models/userModel")

const createUser= async function (req, res) {
    let book = req.body
    let newBook= await UserModel.create(book)
    res.send({msg: newBook})
}

const getUsersData= async function (req, res) {
    let allBooks= await UserModel.find()
    res.send({msg: allBooks})
}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData