// JWT Fundamentals: token generation and verificaticon
const jwt =require("jsonwebtoken");
const secretkey='monkey123';
// payload holds small non -sensitive data'
const payload={
    userID:101,
    role:"member"
};
// jwt.sign() creates a signed JWT token
const token=jwt.sign(payload,secretkey,{expiresIn:"1h"});

console.log("token generated successfully\n",token);

const tokenParts = token.split(".");
console.log("header setion:",tokenParts[0]);
console.log("payLoad setion:",tokenParts[1]);
console.log("signature setion:",tokenParts[2]);
console.log("JWT part count:",tokenParts.length);
try{
    // jwt.verify() checks trust ,signature and expiration
    const verifiedpayload =jwt.verify(token,secretkey);
    console.log("verified payload:",verifiedpayload);
}
    catch(error){
        console.log("verified",error.meessage);
    }
    const decodewithoutverification = jwt.decode(token);
    console.log("decoded token:",decodewithoutverification);




