const express =require("express");
const serviceController=require("../controllers/service.controller.js")
const router=express.Router();

router.route("/service").get(serviceController.getService);
module.exports=router;