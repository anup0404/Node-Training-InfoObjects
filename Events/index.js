const events=require('events');

const eventEmitter= new events.EventEmitter();
eventEmitter.on('myfunction',()=>{
    console.log("hello")
})

eventEmitter.emit('myfunction')  