const {DataTypes}=require('sequelize')
const {sequelize}=require('../db/dbConfig');
const Notice =sequelize.define("Notice",{
    id:{
    type: DataTypes.INTEGER,
    primaryKey:true ,
    autoIncrement:true
    },
    title:{
 type:DataTypes.STRING,
  AlloNUll:true
    },
    image:{
type:DataTypes.STRING,
  AllowNUll:true
    },
  description:{
    type:DataTypes.STRING,
    AlloNUll:false
  }
})
module.exports={Notice}