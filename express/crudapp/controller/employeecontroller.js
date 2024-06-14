const express = require('express')
const Employee = require('./../model/employee.js')
const router = express.Router()

router.get("/",
    async (req, res) => {
        try{
            console.log(req.method)
            const employees = await Employee.find()
            res.json(employees)
        }
        catch(err){
            res.send("Error : " + err)
        }
    }
)
router.get("/:id",
    async (req, res) => {
        try{
            console.log(req.url)
            // const employee = await Employee.findById(req.params.id)
            const employee = await Employee.findOne({_id:req.params.id})
            res.json(employee)
        }
        catch(err){
            res.send("Error : " + err)
        }
    }
)
router.put("/:id",
    async (req, res) => {
        try{
            console.log(req.url)
            // const employee = await Employee.findById(req.params.id)
            const employee = await Employee.findOne({_id:req.params.id})
            employee.name = req.body.name
            employee.gender = req.body.gender
            employee.salary = req.body.salary
            const result = await employee.save()
            res.json(result)
        }
        catch(err){
            res.send("Error : " + err)
        }
    }
)

router.patch("/:id",
    async (req, res) => {
        try{
            console.log(req.url)
            // const employee = await Employee.findById(req.params.id)
            const employee = await Employee.findOne({_id:req.params.id})
            employee.gender = req.body.gender
            employee.salary = req.body.salary
            const result = await employee.save()
            res.json(result)
        }
        catch(err){
            res.send("Error : " + err)
        }
    }
)
router.delete("/:id",
    async (req, res) => {
        try{
            console.log(req.url)
            // const employee = await Employee.findById(req.params.id)
            const result = await Employee.deleteOne({_id:req.params.id})
            res.json(result)
        }
        catch(err){
            res.send("Error : " + err)
        }
    }
)


router.post("/",
    async (req, res) => {
        try{
            const employee = new Employee({
                _id:req.body._id,
                name:req.body.name,
                gender:req.body.gender,
                salary:req.body.salary
            })                
            console.log(req.url)
                const result = await employee.save()            
                res.json(result)
        }
        catch(err){
            res.send("Error : " + err)
        }
    }
)
module.exports = router

// Attendance : https://bit.ly/TT-130624


