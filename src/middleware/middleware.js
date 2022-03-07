

const freeAppUser = function (req, res, next){

        let newHeader = req.headers.isfreeappuser
        console.log(newHeader)
        if(newHeader === "true") {
            next()
        } else {
            return res.send({Error:"the request is missing a mandatory header"}) 
            } 



}


module.exports.freeAppUser=freeAppUser