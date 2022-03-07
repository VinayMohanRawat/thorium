const orderModel = require("../models/orderModel");
const productModel = require("../models/productModel");
const userModel = require("../models/userModel");

const createOrder = async function (req, res){
    let Data = req.body
    // console.log(Data)
    let productId = req.body.productId
    let product = await productModel.findById(productId);
    // console.log(productId)
    // let userId = req.body.userId
    // console.log(userId)

    if (!productId) 
    {
        return res.send({msg:"producndId must be mention"})
    }

    
    if(!product) 
    {
       return res.send({msg:"productId does not exists in DataBase"})
    }

    // if(!userId) 
    // {
    //     return res.send({msg:"userId must be mention"})
    // }

    // let user = await userModel.findById(userId);
    // if(!user) 
    // {
    //     return res.send({msg:"userId does not exists in DataBase"})
    // }

    let savedData = await orderModel.create(Data)
    res.send({msg:savedData})

} 





module.exports.createOrder=createOrder