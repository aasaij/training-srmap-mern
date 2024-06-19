const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const Employee = require('./models/Employee')
const connectionString = "mongodb://127.0.0.1:27017/srmap"
const PORT = process.env.PORT | 9000

mongoose.connect(connectionString)

const app = express()
app.use(cors())
app.use(express.json())
//GET API call
app.get("/", 
    (req, res) => {
        Employee.find({})
        .then(employees => res.json(employees))
        .catch(err => res.json(err))
    }
)
//POST API call
app.post("/createEmployee",
    (req, res) => {
        Employee.create(req.body)
        .then(result => console.log(result))
        .catch(err => console.log(err))
    }
)
app.listen(PORT, ()=> console.log(`Server is running at ${PORT}`))