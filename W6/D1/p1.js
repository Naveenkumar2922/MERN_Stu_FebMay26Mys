//  Basics of NodeJS Modules 
const moduleTitle ="Nodejs module basics";
function decribeModule(){
    console.log("this file is its own module");
    console.log("Title:",moduleTitle);
    console.log("local values stay inside this file unless exported");
}
decribeModule();// invoking the function