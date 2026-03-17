// call back nesting
console.log("starting nested callback flow");
setTimeout(function(){
    console.log("step 1: user loaded");
    setTimeout(function(){
        console.log("step 2: order loaded");
        setTimeout(function(){
            console.log("step 3: payments loaded");
            setTimeout(function(){
            console.log("step 4: shipment loaded");
            console.log("we are in callback hell!!!");


},1000);
},800);
},600);
},400);