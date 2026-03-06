// array map
let numbers=[1,2,3,4];
let squared=numbers.map(num=>num*num);
console.log(squared);

let price=[100,200,300,400];
let pricewithgst=price.map(price=>price +price *0.81);
console.log("price w/o tax:",price);
console.log("price with tax:",pricewithgst);

// using map to extract files
let  users =[
    {name:"Arjun",age:24},
    {name:"Krishna",age:24} 
];
let names=users.map(user => user.name)
console.log("",names);