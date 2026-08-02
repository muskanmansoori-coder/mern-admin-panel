const Service  = require("../models/service.modal.js")

const getService= async(req, res) => {
try {
    const response=await Service.find();
    if(!response){
        res.status(404).json({message:"no service found"})
    }
    res.status(200).json({message:response})
} catch (error) {
 console.log(`service error:,${error}`);
    
}
}
module.exports={getService};