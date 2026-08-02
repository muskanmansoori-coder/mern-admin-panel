const Contact = require("../models/contact.modal");

const contact = async(req, res) => {
    try {
        const response=req.body;
        await Contact.create(response)
        res.status(200).json({message:"Message send successfully"})
    } catch (error) {
        res.status(500).send("Internal server error")
    }


}
module.exports={contact}