const fileHandle = require('fs')
const path = require('path')
const fileName = path.join(__dirname, "data", "bigfile.txt")
const newFile = path.join(__dirname, "data", "sample.txt")
const rs = fileHandle.createReadStream(fileName, {encoding:"utf8"})

rs.on("data",
    (dataChunk, err) => {
        if (err)
            throw err
        const ws = fileHandle.createWriteStream(newFile)
        ws.write(dataChunk)
    }
)