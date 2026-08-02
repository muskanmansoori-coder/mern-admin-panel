require("dotenv").config();
const express=require("express");
const cors= require("cors")
const authRouter = require("./routers/auth.router.js")
const serviceRouter=require("./routers/service.route.js")
const connectDb=require("./config/db.js");
const errorMiddleware = require("./middlewares/error-middleware.js");
const  contactRoute  = require("./routers/contact.route.js");
const  adminRoute  = require("./routers/admin.route.js");
const app = express();
const corsOptions={
    origin:"http://localhost:5173",
   methods:"GET, POST, PUT, DELETE, PATCH, HEAD",
   credentials:true,
}
app.use(cors(corsOptions))
//app.use(router)
app.use(express.json())
//app.use("/api/auth",router)
app.use("/api/data",serviceRouter)
app.use("/api/auth",authRouter)
app.use("/api/form",contactRoute)
app.use("/api/admin",adminRoute)
app.use(express.urlencoded({ extended: true }));

{/*app.get("/",(req, res)=>{
res.status(200).send("welcome to home page")
}) */}

{/*app.get("/register",(req, res)=>{
res.status(200).send("welcome to register page")
})*/}
app.use(errorMiddleware)
const PORT = 3000;
connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is running at port http://localhost:${PORT}`)
    })
})
