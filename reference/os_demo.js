//Information about the invironment and the operating systems

const os = require('os');

//Information about Platform
console.log(os.platform()); //win32

//CPU Arch
console.log(os.arch()); //x64

//CPU Core
console.log(os.cpus()); //quadcore


//Free memory
console.log(os.freemem()/1024/1024/1024);

//Total memory
console.log(os.totalmem());

//Home directory
console.log(os.homedir());

//Uptime
console.log(os.uptime()/60/60);
