const Sequelize=require("sequelize");
//const DATABASE_URL ="postgresql://postgres:123@hellohiibyee@db.wzqliwapkvqkyxuhdaxm.supabase.co:5432/postgres";
//const DATABASE_URL="postgresql://postgres:123@hellohiibyee@db.wzqliwapkvqkyxuhdaxm.supabase.co:5432/postgres";
const DATABASE_URL="postgresql://postgres.wzqliwapkvqkyxuhdaxm:123@hellohiibyee@aws-1-ap-northeast-2.pooler.supabase.com:5432/postgres";
const sequelize =new Sequelize(DATABASE_URL,{
    dialect:"postgres",
    protocol:"postgres",
     dialectOptions:{
        ssl:{
           require:true,
           rejectUnauthorized: false
        }
     }
})//123@hellohiibyee
const connectDb = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({alter:true})
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};


module.exports = {connectDb, sequelize};