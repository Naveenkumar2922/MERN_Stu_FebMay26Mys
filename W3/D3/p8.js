// JSON stringify parse
const CEO={
    id:101,
    name: "Naveen",
    dept:"EC",
    isActive:true
};
const jsonStrinng=JSON.stringify(CEO);
console.log(jsonStrinng);
console.log(CEO);

//JSON parsing
const parsedObject  = JSON.parse(jsonStrinng);
console.log(parsedObject);


