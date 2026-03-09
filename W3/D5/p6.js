// preventdeafult with events
const loginform=document.getElementById("loginform");
    const username=document.getElementById("username");
    const message=document.getElementById("message");

    Form.addEventlistner("submit",function(event){
        // stop relod
        event.preventDefault();

        if(username.value.trim()===""){
            message.textContent="username is required";
            console.log("form locked:no input for username");
            return;
        }
        message.textContent="form handeled by js for usee",username.value;
        console.log("form submitted with username",username.value);
    });