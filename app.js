const express =require('express');
const {sequelize} =require('./db/dbConfig')
 const app=express();
  app.use(express.json())
  require('dotenv').config();
 const model=require('./model/index')
const {connectDb}=require('./db/dbConfig')
 app.use(express.json())
 const userRoutes = require("./Routes/userRoute")
app.use("/api/users", userRoutes)
const seedAdminUser = require('./adminSeed');

const {multer,storage}=require('./middlewares/multerConfig')
const upload=multer({multer:multer})
const adminRoutes = require("./Routes/adminRoute")
const noticeRoute = require("./Routes/noticeRoute")
const eventRoute = require("./Routes/eventRoute")
const attendenceRoute=require('./Routes/attendenceRoute')
app.use("/api/admin", adminRoutes)
app.use("/api/notice", noticeRoute)
app.use("/api/event", eventRoute)
app.use("/api/attendence", attendenceRoute)
// Initialize database and seed admin user
const initializeApp = async () => {
    await connectDb();
    // await seedAdminUser(); see now admin seed didnt run u got it? in terminal 
}
sequelize.sync({ force: false})  // only for development
  .then(() => {
    console.log("Database synced");
  });
app.use(express.static("uploads"));
const PORT=4000
app.listen(PORT,()=>{
    console.log(`nodejs project has started at port 4000`)
})
