// try catch basics ( which handels run time  errors)
// try{
//     console.log("trying to access undefined variable");
//     console.log(notDefined);
//     document.writeln("trying to access undefined variable");
// }
// catch(err){
//     console.log("error caught",err.name,"-",err.message);
//     error.textContent("trying to access undefined variable");
// }
// console.log("program execution continues");

// JSON parsing error
let jsontext="{json}";
try{
    let data = JSON.parse(jsonText);
    console.log(data);
}
catch(err){
    console.log("json parse error:",err.message);
}

try{
    let num=10;
    num();
}
catch(err){
    console.log("caught error:",err.name);
}