const joi = require("joi");

module.exports = {
    createschema : async (req,res,next)=>{
        const schema = joi.object({
            Name : joi.string().min(5).max(15).required(),
            password : joi.string().min(6).max(20).required(),
            email : joi.string().email().required(),
        });
        try{
            const validate = await schema.validateAsync(req.body);
            next();

        }catch(error){
            return res.send({
                error:error,
            });
        }
    },
};