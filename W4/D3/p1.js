const checkbtn =document.getElementById("checkbtn");

checkbtn.addEventListener("click",function(){
console.log("local storage check",typeof localStorage !=="undefined");
console.log("session storage check",typeof sessionStorage!=="undefined");
console.log("localstorage object",localStorage);
console.log("sessiontorage object",sessionStorage);


})    