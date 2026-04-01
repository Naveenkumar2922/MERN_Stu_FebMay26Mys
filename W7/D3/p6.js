// Generating token using login and verfying the token
const jwt =require("jsonwebtoken");
const secretkey="Naveen123";
const wrongsecretkey ="navi777";


function loginUser(email,password){
    if (email =="e@email.com" && password == "mp123"){
        const token = jwt.sign(
            {
                userID:101,
                email:email,
                role:"student"
            },secretkey,{expiresIn:"1h"})
            return{
                success:true,
                token:token
            };    
    }
     return{
                sucess:false,
                message:"invalid credentials"
            };    
}
const loginResult = loginUser("e@email.com","mp123");
console.log("login Result",loginResult);
if (loginResult.success){
    try{
        const verifiedpayload =jwt.verify(loginResult.token,wrongsecretkey,secretkey);
            console.log("verified payload:",verifiedpayload);
    }
     catch(error){
        console.log("verification failed:",error.meessage);
    }

}