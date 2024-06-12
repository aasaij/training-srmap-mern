const fileHandle = require('fs')
const path = require('path')
const fileName = path.join(__dirname, "data", "bigfile.txt")

fileHandle.unlink(fileName, 
    (err) => {
        if (err)
            throw err
        console.log(`${fileName} has been removed!`)
    }
)