const http = require('http');

//Create a Server Object
http.createServer((req,res)=> {
    //Write response
    res.write('Hello World');
    res.end();
}).listen(5000, () => console.log('server running'));