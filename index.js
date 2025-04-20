'use strict'

const {createServer} = require('node:http')

const hostName = '127.0.0.1'
const PORT = 3000

const server = createServer((req, res)=>
{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello World')
})

server.listen(PORT, hostName, ()=>{
{console.log(`Server running at: http://${hostName} : ${PORT}`)}
})


