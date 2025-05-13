const mongoose= require('mongoose');

const employeeSchema=new mongoose.Schema({


    name:{
        type:String,
        required:true 
    },
    sector:{
        type:String,
        required:true
    },
    TermsAndCondition:{
        type:Boolean,
        required:true
    },
    email:{
        type:String,
        required:true
    } 
});

module.exports=mongoose.model("Employee",employeeSchema)