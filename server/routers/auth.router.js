const express=require("express");
//const { Home } = require("../controllers/auth.controller");
const authController = require("../controllers/auth.controller");
const validate=require("../middlewares/validate-middleware");
const {registerSchema,loginSchema}=require("../validatos/auth-validator");
const  authMiddleware  = require("../middlewares/Auth-middleware");



const router = express.Router();
{/*router.get("/",(req, res)=>{
    res.status(200).send("welcome to home page")
    }) */}
router.get("/",authController.Home)
router
.route("/register")
.post(validate(registerSchema),authController.Register);
router
.route("/login")
.post(validate(loginSchema), authController.Login)
router.route("/user").get(authMiddleware, authController.user)
//export const authRouter = router;

module.exports = router;