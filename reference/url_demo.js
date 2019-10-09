const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=1000&status=active');

//Serialized URL
console.log(myUrl.toString());
if(myUrl.toString()==myUrl.href){console.log(true);}else{console.log(false);}//else

//Host (root domain)
//If the url contains also the port, it won't be included in hostname
console.log(myUrl.hostname,myUrl.host);

//Path name - actual path/name
console.log(myUrl.pathname);

//Serialized query - everything after ?
console.log(myUrl.search);

//Create a Params Object
console.log(myUrl.searchParams);

//Add Params dinamically
myUrl.searchParams.append('abc',123);
console.log(myUrl.searchParams);

//Loop throught params
myUrl.searchParams.forEach((value,name) => console.log(name,value));
