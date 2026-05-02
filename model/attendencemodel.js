const {DataTypes}=require('sequelize')
const {sequelize}= require('../db/dbConfig')
const Attendence= sequelize.define('Attendence',{
    id:{
        type:DataTypes.STRING,
        allowNull:false,
        primaryKey:true,

    },
    semester:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    sec:{
        type:DataTypes.STRING,
        allowNull:false
    },
    days:{
    type:DataTypes.INTEGER,
    allowNull:true
    }
})
module.exports={Attendence}