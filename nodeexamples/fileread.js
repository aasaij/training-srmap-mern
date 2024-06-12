const fileHandle = require('fs')
const path = require('path')
// const fileName = path.join(__dirname, "data", "sample.txt")
// console.log(fileName)
// fileHandle.readFile(fileName, "utf8",
//     (err, data) => {
//         if (err)
//             throw err
//         console.log(data)
//     }
// )
const fileName = path.join(__dirname, "data", "result.txt")
const str = "Thank you so much for being very active in the class\nYou are all Engineers."
fileHandle.writeFile(fileName, str, 
    (err) => {
        if (err)
            throw err
        console.log(`${fileName} is created`)
        fileHandle.appendFile(fileName, anotherStr, 
            (err) => {
                if (err)
                    throw err
                console.log('appended')
            }
        )        
    }
)
const oldFileName = path.join(__dirname, "data", "sample.txt")
const newFileName = path.join(__dirname, "data", "output.txt")
fileHandle.rename(oldFileName, newFileName, 
    (err) =>{
        if (err)
            throw err
        console.log('Renamed')
    }
)





const anotherStr = "\n\nThis is for testing"


console.log('This is will be printed first')