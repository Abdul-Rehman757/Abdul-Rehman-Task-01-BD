const admin = [];
module.exports = {
    createAdmin : (req,res)=>{
        try{
            admin.push(req.body);
            return res.send({
                response : admin,
            });
        }catch(error){
            return res.send({
                error : error,
            });
        }
    },
    getAdmin :(req,res)=>{
        try{
            return res.send({
                response : admin,
            });
        }catch(error){
            return res.send({
                error : error,
            });
        }
    },
    DeleteAdmin :(req,res)=>{
        try{
            return res.send({
                response : admin,
            });
        }catch(error){
            return res.send({
                error : error,
            });
        }
    }
};