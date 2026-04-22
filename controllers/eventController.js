const {Event}=require('../model/eventModel')
exports.createEvent=async (req,res)=>{
    const{name,date}=req.body;
    if(!name||!date){
        return res.send("please enter the proper information")
    }
    if(!req.file){
        return res.send("please upload the image")
    }
  await  Event.create({
    Name:name,
    Date:date,
    image:req.file.filename
   })
   return res.status(201).json({
    message:"Events registered succesfully"
   })
}
exports.deleteEvent=async(req,res)=>{
  const id=req.params.id;
  await Event.destroy({
    where:{
      id:id
    },
  })
  message:"deleted"
}
