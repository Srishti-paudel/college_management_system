const Attendence =require('../model/attendenceModel')
const markAttendence=async(req,res)=>{
    try{
        const{studentId,studentName,semester,section,subject,date,status}=req.body

        if (!studentId || !studentName || !semester || !section || !subject || !date || !status) {
            return res.status(400).json({ message: "All fields are required" })
        }
        const existing= await Attendence.findOne({
            where:{studentId,subject,date}
        })
        if(isexisting){
            return res.status(400).json({
            message:"Attendence is already marked for this student"    
            })
        }
         const attendance = await Attendance.create({
            studentId,
            studentName,
            semester,
            section,
            subject,
            date,
            status,
            markedBy: req.user.userId,
            markedByName: req.user.name
        })
         return res.status(201).json({
            message: "Attendance marked successfully",
            attendance
        })

    }
catch(err){
    return res.status(500).json({message:err.message})
}
}