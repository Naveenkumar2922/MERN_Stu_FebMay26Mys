// conditional statements
let age=20;
if(age <13){
    console.log("Minor");
}
if(age <18){
    console.log("Teenage");
}
else{
    console.log("adult");
}


// switch statements
console.log("switch statements");
const day="5";
switch(day) {
    case "12":
    console.log("start of the week");
    break;
    case "wednesday":
    console.log("mid of the week");
    case "friday":
    console.log("end of the week");
    default:
    console.log("some day in  the week");
    break;
}

// type conversion
let n = Number ("ABC");
console.log("n:",n,"type of n:",typeof n,"isNaN",isNaN (n));

