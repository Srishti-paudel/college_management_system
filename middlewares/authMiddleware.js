const jwt=require('jsonwebtoken')
const isAuthenticated=(req,res,next)=>{
const token =req.headers.authorization
   if(!token){
    return res.status(401).json({
        message:"Invalid token"
    })
   }
   jwt.verify(token,process.env.JWT_SECRET,(err,decoded)=>{
    if(err)
    {
         return res.status(401).json({
        message:"Invalid token"
    })
    }
        req.user = decoded
        next()
   })
}
const isAdmin = (req, res, next) => {

    if (req.user.role !== "admin") {
        return res.status(403).json({
            message: "Access denied. Admin only."
        })
    }

    next()
}
const isTeacher =(req,res,next)=>{
    if(req.user.role!=='teacher' &&req.user.role!=="admin")
    {
        return res.status(400).json({message:"Access denied"})
    }
    next()
}
module.exports={isAuthenticated,isAdmin,isTeacher}