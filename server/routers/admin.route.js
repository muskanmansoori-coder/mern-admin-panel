const express=require("express");
const adminController=require("../controllers/admin.controller.js");
const authMiddleware = require("../middlewares/Auth-middleware.js");
const adminMiddleware = require("../middlewares/admin-middleware.js");
const validate = require("../middlewares/validate-middleware.js");
const {updatedUserSchema} = require("../validatos/updateduser.validate.js");

const router=express.Router();

router.route("/users").get(authMiddleware, adminMiddleware, adminController.getAllusers);
router.route("/users/:id").get(authMiddleware, adminMiddleware, adminController.getSingleUser)
router.route("/users/update/:id").patch(authMiddleware, adminMiddleware,validate(updatedUserSchema) , adminController.updateUserById);
router.route("/contact/delete/:id").delete(authMiddleware, adminMiddleware,adminController.deleteAdminContact)
router.route("/users/delete/:id").delete(authMiddleware, adminMiddleware, adminController.deleteUserById);

router.route("/contacts").get(authMiddleware,adminMiddleware, adminController.getAllcontacts)
module.exports=router;