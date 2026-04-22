const {Notice} =require('../model/noticeModel')
exports.createNotice= async (req,res)=>{
const {title,subtitle,description}= req.body;
    
  if (!title || !subtitle || !description) {
    return res.send("Please provide title, subtitle and description");
  }
 if (!req.file) {
    return res.send("Please upload image");
  }
  console.log(req.file)
   Notice.create({
    title:title,
    subtitle:subtitle,
    description:description,
    image:req.file.filename
  })
    return res.status(201).json({
        message: "Notice registered successfully"
    })
}
exports.deleteNotice=async(req,res)=>{
  const id=req.params.id;
  await Notice.destroy({
    where:{
      id:id
    },
  })
  message:"deleted"
}
