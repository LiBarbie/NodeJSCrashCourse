const path = require("path");

//__filename gives the file name
console.log("Extended filename : "+__filename);


//Basename - Base File Name
console.log("Short Filename : "+path.basename(__filename));

// Dirname - Directory Name
console.log("Short Directory Name : "+path.dirname(__filename));

//Extname - File Extension
console.log("File Extension : "+path.extname(__filename));

//Parse - Create Path Object
console.log(path.parse(__filename));

//Join - Concatenate Paths
//Can add as "directories" as I like

//console.log(path.join(__dirname,'test','hello.html'));
console.log(path.join(__dirname,"root","root2","root3","file.html"));