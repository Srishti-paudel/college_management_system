const {DataTypes}=require('sequelize')
const {sequelize}=require('../db/dbConfig');
const Event =sequelize.define("Event",{
   id:
{
        type:DataTypes.INTEGER,
        primaryKey: true ,
        autoIncrement:true
    },
    Name:{
        type:DataTypes.STRING,

    },
    Date:{
        type:DataTypes.DATE,
        AllowNUll:false
    },
image:{
type:DataTypes.STRING,
  AllowNUll:true
}
})
module.exports={Event}