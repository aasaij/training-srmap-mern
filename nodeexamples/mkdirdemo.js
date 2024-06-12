const fileHandlePromise = require('fs').promises
const fileHandle = require('fs')
const path = require('path')
const dirName = path.join(__dirname,"database1")
//checking whether the directory exists or not
if (!fileHandle.existsSync(dirName)){
    // does not exist
    fileHandlePromise.mkdir(dirName) 
        .then(
            () => console.log("directory created!")
        )
        .catch(
            (err) => console.log(err)
        )
}