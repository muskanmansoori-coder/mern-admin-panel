const mongoose = require("mongoose");
const bcrypt= require("bcryptjs");
const jwt=require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required: true,
    },
    password:{
        type:String,
        required:true,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    }
})
//hash password
userSchema.pre("save", async function(next){
const user = this;
if(!user.isModified("password")){
    next()
}
try {
    const saltRound =10;
        const hashPassword =await bcrypt.hash(user.password, saltRound)
        user.password=hashPassword
} catch (error) {
    next(error)
}
})
//jwt token
userSchema.methods.generateToken=async function(){
    console.log("this", this);
    
    try {
       return jwt.sign({userId:this._id.toString(),email:this.email, isAdmin:this.isAdmin},
        process.env.JWT_SECRET,
        {
            expiresIn:"30d",
        }
    )
    } catch (error) {
        console.log(error);
        
    }
}
//comparePassword
userSchema.methods.comparePassword=async function(password){
 return await bcrypt.compare(password, this.password)

}

const User = new mongoose.model("User", userSchema);
module.exports=User