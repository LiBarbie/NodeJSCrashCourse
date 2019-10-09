const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    if(req.url=='/'){
        res.end('<h1>Homepage</h1>');
    }//if
    console.log(req.url);
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log("Server running on port "+PORT));
