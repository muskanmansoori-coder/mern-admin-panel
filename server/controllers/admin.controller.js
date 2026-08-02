const Contact = require("../models/contact.modal");
const User = require("../models/user.model");

const getAllusers = async(req, res) => {
try {
   const users=await User.find({},{password:0})
   
   if(!users || users.length === 0){
   return res.status(404).json({message:"no users found"})
   }
   //console.log("users",users); 
  return res.status(200).json(users)
} catch (error) {
    console.log(error);
  
}
}
//getAllcontacts
const getAllcontacts = async(req, res) => {
try {
    const contacts=await Contact.find();
    if(!contacts || contacts.length === 0){
       return  res.status(404).json({message:"no contacts found"})
    }
   return res.status(200).json(contacts)
} catch (error) {
    console.log(error);
  
}
}
//deleteUserById
const deleteUserById = async(req, res) => {
try {
    const id=req.params.id;
    const deletedUser=await User.deleteOne({_id:id})  
    console.log("deleteduser", deletedUser);
    return res.status(200).json({message:"user deleted successfully"})
    
} catch (error) {
    console.log("deleteuser", error);
    
}
}
//getSingleUser
const getSingleUser = async(req, res) => {
try {
    const id= req.params.id;
    const singleuserData=await User.findOne({_id:id},{password:0})
    if(!singleuserData){
        res.status(404).json({message:"single user is not find"})
    }
    return res.status(200).json(singleuserData)

} catch (error) {
    console.log(error);
    
}
}
//updateUserById
const updateUserById = async(req, res) => {
try {
    const id=req.params.id;
  // const {username, email,phone} = req.body;
   //const updateuserSuccess=await User.updateOne({_id:id},{$set:{username:username,email:email, phone:phone}});
   const toUpdateData= req.body;
   const updateuserSuccess=await User.updateOne({_id:id},{$set:toUpdateData})
   return res.status(200).json(updateuserSuccess)
    
} catch (error) {
    console.log(error);
    
    
}
}
//deleteAdminContact
const deleteAdminContact = async(req, res) => {
    try {
        const id= req.params.id;
        const deleteContact=await Contact.deleteOne({_id:id});
        console.log("deletecontact", deleteContact);
        return res.status(200).json(deleteContact)
    } catch (error) {
        console.log(error);
        
    }
}
module.exports={getAllusers,getAllcontacts, deleteUserById,getSingleUser,updateUserById,deleteAdminContact}