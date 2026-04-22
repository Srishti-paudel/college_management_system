const DataTypes=require('sequelize')
const {sequelize }=require('../db/dbConfig')
const User = sequelize.define("User",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true ,
        autoIncrement:true
    
        
    },
    name :{
        type:DataTypes.STRING,
        allowNull:false
    },
    Faculty:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    shift:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
     Regd_No:{
        type:DataTypes.STRING,
        allowNull:false
    },
  


})
module.exports= {User};
