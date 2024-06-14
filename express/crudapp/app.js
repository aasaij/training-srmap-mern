const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = 9000
const connectionURL = "mongodb://127.0.0.1:27017/cms"

//connection with MongoDB using connectionString
mongoose.connect(connectionURL)
//Creating connection object
const con = mongoose.connection
con.on('open', 
    (err)=>{
        if (err)
            throw err
        console.log('Connected!')
    }
)
app.use(express.json())
app.use("/employees", require('./controller/employeecontroller.js'))
app.listen(PORT, 
    () => {
        console.log(`Server is running on ${PORT}`)
    }
)