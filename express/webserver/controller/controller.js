const express = require('express')
const path = require('path')
const router = express.Router()

router.get("^/$|/index(.html)?",
    (req, res) => {
        const respondFile = path.join(__dirname,"..","views", "index.html")
        try{
            res.sendFile(respondFile)
        }
        catch(err){
            res.send("Error : " + err)
        }        
    }
)
router.get('/offers(.html)?',
    (req, res) => {
        const respondFile = path.join(__dirname,"..", "views", "offers.html")
        try{
            res.sendFile(respondFile)
        }
        catch(err){
            res.send("Error : " + err)
        }        
    }
)
router.get("/new-offers(.html)?", 
    (req, res) => {
        try{
            res.redirect(301,"offers.html")
        }
        catch(err){
            res.send("Error : " + err)
        }
    }
)

module.exports  = router

