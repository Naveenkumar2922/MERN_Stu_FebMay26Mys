// Using the EventEmitter class
const EventEmitter= require("events");

// create a new event emitter instance 
// this object can publish events and allow listeners  to subscribe 
const orderEmitter = new EventEmitter();


// Register a  Listener for the "Orderplaced" event.
// whenever the event is emitted, the function will execute
// once() registers a listener that automatically removes itself after running for the first time 

orderEmitter.once("orderplaced",
    function(orderId,customerName){
        console.log("Hello",customerName);
        console.log(" Hello Naveen ,waiting for Restaurant accepted order.",orderId);
    }
);
orderEmitter.on("orderplaced",
    function(orderId,customerName){
        console.log("Hello",customerName);
        console.log("Rsturant accepted order",orderId);
    }
);
orderEmitter.on("orderplaced",
    function(orderId,){
        // console.log("Hello",customerName);
        console.log("Assigning the delivery partner");
    }
);
orderEmitter.on("orderplaced",
    function(orderId,customerName){
        console.log("Hello",customerName);
        console.log("vishnu is delivering your order.",orderId);
    }
);


// Emit the event extra data
// the listener receives the orderId value
orderEmitter.emit("orderplaced","ORD-2403001","Naveen",10000);
orderEmitter.emit("orderplaced","ORD-2403001","Naveen",10000);

