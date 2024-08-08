const std = [];
module.exports = {
    create : (req,res)=>{
        try{
            std.push(req.body);
            return res.send({
                response : std,
            });
        }catch(error){
            return res.send({
                error: error,
            });
        }
    },
    getAll : (req,res)=>{
        try{
            return res.send({
                response : std,
            });
        }catch(error){
            return res.send({
                error : error,
            });
        }
    },
    Delete : (req,res)=>{
        try{
            return res.send({
                response : std,
            });
        }catch(error){
            return res.send({
                error : error,
            });
        }
    }
};