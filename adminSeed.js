const {User}= require('./model/userModel')
const bcrypt =require('bcrypt')
const seedAdminUser= async ()=>{
    const userAdmin= await User.findOne({
        where:{email:"admin@gmail.com"}
    })
    if(userAdmin){
        console.log("Admin user alredy exists!");
        return;
    }
    await User.create({
        name:"Srishti Paudel",
        email:"admin@gmail.com",
        password:bcrypt.hashSync("thisisadmin",10),
       
         type: "admin",
        Faculty: "Administration",  // add default faculty
        shift: "Day",               // add default shift
        Regd_No: "ADM001"   
    })
     console.log("Admin user created successfully!");
}
module.exports=seedAdminUser;