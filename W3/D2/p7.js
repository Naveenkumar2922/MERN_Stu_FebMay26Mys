// Arrow function
(args) => {
    // body of the functon
}


// Adding two numbers 
 const sum=(a,b) =>  {
   return a+b;
}
console.log("3+5=",sum(3,5));

// single line return / implicite return
const square=x => x*x;
console.log("square of 44:",square (44));

const sayhello=() => console.log("hello from arrow func");
sayhello();