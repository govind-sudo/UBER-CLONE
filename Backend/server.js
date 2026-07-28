const http = require('http')
const app = require('./app')
const port = process.env.PORT || 5050;


const server = http.createServer(app);

console.log("chnages cdone")

server.listen(port,()=>{
    console.log("server is running")
})

