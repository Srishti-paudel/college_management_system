const nodemailer=require("nodemailer");
const sendEmail=async(details)=>{
    const transporter=nodemailer.createTransport({
        service:"gmail",
        auth:{
            email:process.env.email,
            pass:process.env.password
        }
    })
    await transporter.sendMail({
        from:"Srishti Paudel <srishtipaudel@example.com>",
        to:details.email,
        subject:details.subject,
        text:details.text

    })
}
module.exports=sendEmail;