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

//Add new content to a File
fs.appendFile(path.join(__dirname,'/test','hello.txt'),'\nAdded a new part to the file!', err => {
    if (err) throw err;
    console.log('File re-written');
});

//Read a File
fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf8',function(err, data){
    if(err) throw err;
    console.log(data);
});

//Rename a File
fs.rename(path.join(__dirname,'/test','hello.txt'),path.join(__dirname,'/test','helloworld.txt'), err => {
    if (err) throw err;
    console.log('File renamed');
});