const btn = document.getElementById("comparebtn");

btn.addEventListener("click",function(e){
    console.log("regular function")
    console.log("thiss === btn",this===btn);
    console.log("e current target ===btn",e.currentarget===btn);
});
btn.addEventListener("click",(e)=>{
    console.log("arrow function")
    console.log("this===btn",this===btn);
    console.log("e current target ===btn",e.currentarget===btn);

});
