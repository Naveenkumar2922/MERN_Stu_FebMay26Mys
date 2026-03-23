// usage of buit in and third party modules
const path = require("path");//path is a built-in module,so it works without installation
const invoicePath=path.join ("invoices","2026","invoice_0.001.txt");
console.log("built-in module result:",invoicePath);
// how to use third-party package/module
try{
    const_=require("lodash");
    console.log("third-party module example");
}
catch(error){
    console.log("third party module 'lodash' is not installed ");
};