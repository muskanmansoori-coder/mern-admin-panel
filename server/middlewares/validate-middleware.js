const { parseAsync } = require("zod")

const validate=(schema)=>async(req, res, next)=>{
    try {
        const parseBody = await schema.parseAsync(req.body)
        req.body=parseBody
        next();
    } catch (error) {
        //console.log(error)
      const status =422;
      const message="Fill Input Properly";
      const extraDetails=error.issues[0].message;
      const Error = {
        status,
        message,
        extraDetails
      }
      console.log(Error);
      next(Error)
      
    }

}
module.exports=validate;