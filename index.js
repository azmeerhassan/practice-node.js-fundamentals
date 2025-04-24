var http = require('http');
var dateTime = require('./dateModule.js') 

http.createServer((req, res)=>{
    res.writeHead(200, {'content-type': 'text/html'})
    res.write('Currently date and time is: '+dateTime.myDateTime()+'\n')
    res.end('\nHello World!')
}).listen(8080);




