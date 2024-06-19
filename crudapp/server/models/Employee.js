const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
    name:String,
    gender:String,
    salary:Number
})

const Employee = mongoose.model("employee", employeeSchema)
module.exports = Employee

// https://bit.ly/RD-180624
