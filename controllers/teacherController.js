const teacher = [];
module.exports ={
    createTeacher : (req,res)=>{
        try{
            teacher.push(req.body);
            return res.send({
                response: teacher,
            });
        }catch(error){
            return res.send({
                error : error,
            });
        }
    },
    getTeacher :(req,res)=>{
        try{
            return res.send({
                response : teacher,
            });
        }catch(error){
            return res.send({
                error : error,
            });
        }
    },
    DelTeacher :(req,res)=>{
        try{
            return res.send({
                response : teacher,
            });
        }catch(error){
            return res.send({
                error : error,
            });
        }
    }
};