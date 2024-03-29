const EventEmitter = require('events');

//Create Emitter Class
class MyEmitter extends EventEmitter {}//MyEmitter

//Init Object
const myEmitter = new MyEmitter();

//Event Listener
myEmitter.on('event',() => console.log('Event Fired!'));

//Init Event
myEmitter.emit('event');