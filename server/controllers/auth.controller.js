const  User= require("../models/user.model.js")
const jwt = require("jsonwebtoken")
const bcrypt= require("bcryptjs");
//home logic

const Home = async(req, res) => {
    try {
    res.status(200).send("welcome to the home  using controller page")
        
    } catch (error) {
        console.log(error) 
    }

}


//register logic
{/**const Register = async(req, res) => {
    try {
        res.status(200).send("welcome to the register  using controller page")
    } catch (error) {
        console.log(error)
    }

} */}
const Register = async(req, res) => {
    try {
        const {username, email, phone, password}=req.body;
   console.log(req.body);
        const userExist = await User.findOne({email:email});

        if(userExist){
      return res.status(400).json({message:"email already exist"})
        }

        //secure passwords
       {/*const saltRound =10;
        const hashPassword =await bcrypt.hash(password, saltRound)*/}
        const userCreated= await User.create({username, email, phone, password});
        //jwt token
        {/*const  generateToken = () => {
 return jwt.sign(
    {
        id: userCreated._id,
        email: userCreated.email,
    },
    process.env.JWT_SECRET,
    {
    expiresIn:"30d",
}
)
        }
        token= await generateToken();
          res.status(200).send({message:userCreated,token:token})
        */}
        
        res.status(200).json({info:"registration successful", message:userCreated,token: await userCreated.generateToken(), userId:userCreated._id.toString()})
    } catch (error) {
        return res.status(500).send("Internal server error")
    }

}
//Login logic
const Login = async(req, res) => {
    try {
        const {email, password}=req.body;
        console.log("login data",req.body);

        const userExist=await User.findOne({email:email});

        if(!userExist){
           return res.status(400).json({message:"user does not exist please try again"})
        }
       // const user = await bcrypt.compare(password, userExist.password)
       const user = await userExist.comparePassword(password)
        if(user){
res.status(200).json({message:"login succesful", token:await userExist.generateToken(),userId:userExist._id.toString()})
        }else{
            res.status(401).json({message:"Invalid email and password"})
        }
        
    } catch (error) {
        res.status(500).json({message:"Internal server error"})
    }
}
 const user = (req, res) => {
try {
   const userData=req.user;
   ///console.log("userData", userData);
  return res.status(200).json({message:userData})
    
} catch (error) {
    console.log(`error from the user route ${error}`);
    
}
}
module.exports={Home, Register,Login, user}