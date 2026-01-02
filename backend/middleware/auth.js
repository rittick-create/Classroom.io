const jwt=require("jsonwebtoken")
const SECRET=process.env.SECRET||"RITTPROL"


const authenticateJwt=(req,res,next)=>{
    const authHeader=req.header.authorization;
    if(authHeader){
        const token=authHeader.split(" ")[1];
        jwt.verify(token,SECRET,(err,user)=>{
            if(err){
                return res.status(403).json({message: "Forbidden: Invalid token"})
            }
            //send the data accordingly
            next();
        });

    }else{
        res.status(401).json({ message: 'Unauthorized: No token provided' });
    }
}


module.exports = {
  authenticateJwt,
  SECRET,
};