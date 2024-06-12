const fileHandlePromise = require('fs').promises
const path = require('path')
const fileName = path.join(__dirname, "data", "result.txt")
const fileOps = async () => {
    const data = await fileHandlePromise.readFile(fileName, "utf8")
    console.log(data)
    await fileHandlePromise.appendFile(fileName,"\nThis is another test" )    
}
fileOps()