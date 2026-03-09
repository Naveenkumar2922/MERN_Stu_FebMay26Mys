const oncebtn=document.getElementById("oncebtn");

// limiting listener to once for a event
oncebtn.addEventListener("click",function(){
    console.log("this click works only once.");
},{once:true});


document.addEventListener("keydown",function(event){
    if(event.ctrlKey && event.key.toLowerCase()==="s"){
        event.preventDefault();
        console.log("custom ctrl+s shortcut triggered");
    }
})