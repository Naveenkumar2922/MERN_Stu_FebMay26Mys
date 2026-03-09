// Event delegation
const tasklist=document.getElementById("tasklist");
const addtask=document.getElementById("addtask");
let taskCount=3;

tasklist.addEventListener("click",function(event){
    if(event.target.classlist.contains("deleteBtn")){
console.log("delete button clicked for:",event.target.parentElement.textContent.trim());

event.target.parentElement.remove();
    }
    
});
addtask.addEventListener("click",function(){
    taskCount++;
    const li=document.createElement("li" );
    li.innerHTML="task" + taskCount+
    '<button class="deleteBtn">Delete</button>';
    tasklist.appendChild(li);
    console.log("New class creater");

});