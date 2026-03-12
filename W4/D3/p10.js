const asyncfetchBtn = document.getElementById("asyncfetchBtn");
const output = document.getElementById("output");

asyncfetchBtn.addEventListener("click",async function(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if(!response.ok)  throw new Error("HTTP Error: "+response.status);
            const users = await response.json();
            console.log(users);
            const firstThree=users.slice(0,3);
            output.textContent = JSON.stringify(firstThree,null,2);
    } 
    
    catch(error){
        output.textContent = "Error: "+error.message;
    }
});