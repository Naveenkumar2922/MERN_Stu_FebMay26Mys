// Breakpoint
// inspect the variable value
// view the call stack
// step through code line by line
// evaluate expression in the console 
// watch how variable change during the execution
// to find logical errors 
// browser
function calculateTotal (prices){
    let total =0;
    for (let i = 0;i<prices.length;i++){
        let price =prices[i];
        total+=price;
        debugger;
    }
     return total;
}
 let cart=[100,250,150,1000,220];
 calculateTotal (cart);
 console.log("total:",calculateTotal(cart));