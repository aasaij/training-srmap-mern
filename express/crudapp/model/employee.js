const mongoose = require('mongoose')

const employeeSchema = mongoose.Schema({
        _id : {
            type:String,
            required:true
        },
        name : {
            type:String,
            required:true
        },
        gender : {
            type:String,
            required:true
        },
        salary : {
            type:Number,
            required:true
        }
    }
)
module.exports = mongoose.model("Employee", employeeSchema)