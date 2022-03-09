

const authentication = function (req,res,next){

    let token = req.headers["x-Auth-token"]
    
    if (!token) token = req.headers["x-auth-token"];

    if (!token) return res.send({ status: false, msg: "token must be present" });

   
    // let decordedToken = jwt.verify(token,"functionup-thorium")

    // let userLoggedIn = decordedToken.userId
  
  
    // if(id !== userLoggedIn) 
    // {
    //     return res.send({Error:"Given userId is not matching with logged userId"}) 
    // }
    
    next()

}



module.exports.authentication=authentication