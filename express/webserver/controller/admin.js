const express = require('express')
const router = express.Router()
const path = require('path')

router.get("^/$|/index(.html)?",
    (req, res) => {
        try{
            const adminIndex = path.join(__dirname, "..", "views", "admin", "index.html")
            res.sendFile(adminIndex)
        }
        catch(err){
            res.send("Error : " + err)
        }        
    }
)
router.get("/test(.html)?",
    (req, res) => {
        try{
            const adminIndex = path.join(__dirname, "..", "views", "admin", "test.html")
            res.sendFile(adminIndex)
        }
        catch(err){
            res.send("Error : " + err)
        }        
    }
)
module.exports = router