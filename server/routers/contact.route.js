const express= require("express");
const contactController = require("../controllers/contact.controller");
const validate = require("../middlewares/validate-middleware");
const contactSchema = require("../validatos/contact.validate");
//const Contact = require("../models/contact.modal");

const router = express.Router();
 

router.route("/contact").post(validate(contactSchema),contactController.contact)
module.exports=router