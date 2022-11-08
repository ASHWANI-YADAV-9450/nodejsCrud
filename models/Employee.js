const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
    name:{
        type:String,
        require:[true,"Name Must Required"]
    },
    dsg:{
        type:String,
        require:[true,"Designation Must Required"]
    },
    salary:{
        type:String,
        require:[true,"Salary Must Required"]
    },
    email:{
        type:String,
        require:[true,"Emai Must Required"]
    },
    phone:{
        type:String,
        require:[true,"Phone Number Must Required"]
    },
    city:{
        type:String,
     },
     state:{
        type:String,
     }
})

const Employee = new mongoose.model("Employee",EmployeeSchema);
module.exports = Employee