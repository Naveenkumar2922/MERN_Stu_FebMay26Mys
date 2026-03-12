const asyncfetchbtn=document.getElementById("asyncfetchbtn");
const output =document.getElementById("output");

asyncfetchbtn.addEventListener("click",
     async function(){
        output.textContent="Loading user...";
        try{
            const response= await 
            fetch("https://jsonplaceholder.typicode.com/posts/101");
            if (!response.ok) throw new Error("HTTP error:"+response.status);
            const data=await response.json();
            output.textContent=JSON.stringify(data,null,3);
        }
        catch(error){
            output.textContent="Error:"+error.message;
        }

});
