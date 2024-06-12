const http = require('http')
const fileHandle = require('fs')
const path = require('path')
const PORT = process.env.PORT | 9000
// const webServer = http.createServer(
http.createServer(
    (req, res) => {
        const indexFile = path.join(__dirname, "index.html")
        fileHandle.readFile(indexFile,"utf8",
            (err, file) => {
                if (err)
                    throw err
                res.writeHead(200,{"Content_Type":"text/html"} )
                res.write(file)
                res.end()
            }
        )
    }
).listen(PORT,
    console.log(`Server is listening on ${PORT}`)
)
// webServer.listen(PORT,
//     console.log(`Server is listening on ${PORT}`)
// )

// Attendance : https://bit.ly/RR-120624
// Trainer : Tambi
// Session : FN
