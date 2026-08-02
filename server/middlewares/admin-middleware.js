const adminMiddleware = async(req, res, next) => {
try {
    const isAdminUser= req.user.isAdmin;

    if(!isAdminUser){
       return res.status(404).json({message:"this user is not a admin"}) 
    }
//res.status(200).json({message:isAdminUser})
    next()
} catch (error) {
   console.log(error);
    next(error)
}
}
module.exports=adminMiddleware