// Named handlers and removeEventListner
const startBtn=document.getElementById("startBtn");
const removetBtn=document.getElementById("removeBtn");

function handleClick(){
    console.log("startBtn clicked");

}
startBtn.addEventListener("click",handleClick);


removeBtn.addEventListener("click",function(){
startBtn.removeBtn("click",handleClick);  
console.log("click listener removed from startBtn");  
});


