const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");


const createUser = async function (req, res) {
  
  let data = req.body;
  let savedData = await userModel.create(data);
  res.send({ msg: savedData });
};

const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is not corerct",
    });

  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "thorium",
      organisation: "FUnctionUp",
    },
    "functionup-thorium"
  );
  res.setHeader("x-auth-token", token);
  res.send({ status: true, data: token });
};     


const getUserData = async function (req, res) {
  
  let userId = req.params.userId;

  let token = req.headers["x-auth-token"]
  // console.log(token)
 
  let decodedToken = jwt.verify(token, "functionup-thorium");

  if (!decodedToken) 
  {
  return res.send({ status: false, msg: "token is invalid" });
  }

  let userLoggedIn = decodedToken.userId 

 
  
  if(userId !== userLoggedIn)
   {
    return res.send({Error:"Given userId is not matching with loggedIn userId"})
    }
  
  let userDetails = await userModel.findById(userId);
  if (!userDetails) {
    return res.send({ status: false, msg: "No such user exists" });
  }
  res.send({ status: true, data: userDetails });
};


const updateUser = async function (req, res) {


let userId = req.params.userId;

let decordedToken = jwt.verify(token,"function-thorium")

let loggedIn = decordedToken.userId

if(!decordedToken){
  return res.send({Error:"JWTToken is not matching"})
}

if(!userId == loggedIn){
  return res.send({ERROR:"Given userId is not matching with loggedIn userId"})
}


let user = await userModel.findById(userId);
 
  if (!user) {
    return res.send("No such user exists");
  }

let userData = req.body;
let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
  res.send({ status: updatedUser, data: updatedUser });
};


const deleteUser = async function(req, res){

   let userData = req.params.userId ;
  let selectData =await userModel.findOneAndUpdate({_id:userData}, {$set:{isDeleted:true}},{new : true});
  res.send({status:selectData})

};

const postMessage = async function(req,res){
  let id = req.params.userId
  let message = req.body.message

  let token = req.headers["x-auth-token"]

  let decordedToken = jwt.verify(token,"functionup-thorium")

  let userLoggedIn = decordedToken.userId
  console.log(decordedToken)
  
  if(id !== userLoggedIn) 
  {
    return res.send({Error:"Given userId is not matching with logged userId"}) 
  }

  let user = await userModel.findById(id)
  let updatedPosts = user.post
  updatedPosts.push(message)
  let updatedUser = await userModel.findByIdAndUpdate( {_id:user._id}, {post:updatedPosts}, {new:true} )
  return res.send({status:true, data: updatedUser})

}


module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser;
module.exports.postMessage = postMessage;
