const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
 const authMiddleware = async(req, res, next) => {
const token=req.header("Authorization");
if(!token){
   return  res.status(401).json({message:"token not provided"})
}
//console.log("token from auth:", token);
const jwtToken=token.replace("Bearer ", "");
console.log("jwtToken:", jwtToken);

try {
    const jwtVerifyToken=jwt.verify(jwtToken, process.env.JWT_SECRET);
    //console.log("jwtverifytoken", jwtVerifyToken);
    const userData =await User.findOne({email:jwtVerifyToken.email}).select({password:0})
    //console.log("userData", userData);
    
    req.user=userData;
    req.token=token;
    req.userID=userData._id
    
    next()
} catch (error) {
    return  res.status(401).json({message:"token not provided"})
}

}
module.exports=authMiddleware