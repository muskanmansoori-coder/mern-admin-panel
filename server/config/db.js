const mongoose =require("mongoose");


//const URI = "mongodb+srv://muskanmansoori258_db_user:3uewZEl8gHugxmMT@clustermernadmin.wfjxsbp.mongodb.net/mern_admin?appName=Clustermernadmin"


const connectDb = async() => {
try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("mongoose connected successfully");
    
} catch (error) {
    console.log(error);
    process.exit(0);
    
}
}
module.exports = connectDb;