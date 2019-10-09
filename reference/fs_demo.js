const fs = require('fs');
const path = require('path');

//Create a folder
fs.mkdir(path.join(__dirname,'/test'),{},function(err){
    if(err) throw err;
    console.log('Folder created...');
});

//Create and write to a file
fs.writeFile(path.join(__dirname,'/test','hello.txt'),'Hello world!\nI\'m Linda, nice to meet you!', err => {
    if (err) throw err;
    console.log('File written');
});