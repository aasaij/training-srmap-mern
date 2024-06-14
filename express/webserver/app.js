const express = require('express')
const path = require('path')
const PORT = process.env.PORT | 9000

const app = express()

// app.get("*", 
//     (req, res) => {
//         const respondFile = path.join(__dirname,"views", "error.html")
//         try{
//             res.sendFile(respondFile)
//         }
//         catch(err){
//             res.send("Error : " + err)
//         }                
//     }
// )
app.use("/", require('./controller/controller.js'))
app.use("/admin", require('./controller/admin.js'))

app.listen(PORT, 
    () => {
        console.log(`Server is running on ${PORT}`)
    }
)