// 
const introBtn = document.getElementById("introBtn");
const output = document.getElementById("output");

introBtn.addEventListener("click",function(){
    output.textContent = "Sending request...";
    fetch("https://jsonplaceholder.typicode.com/posts/100")
    .then(function(responce){
        return responce.text();
    })
    .then(function(text){
        console.log("Raw data object : ", text);
        // output.textContent = "Status: " + responce.status+ "\nOk:"+data.ok ;
        output.textContent = JSON.stringify(text,null,2);
    })
    .catch(function(error){
        output.textContent = "Unexpected fatch error :" +error.message;
    });
});