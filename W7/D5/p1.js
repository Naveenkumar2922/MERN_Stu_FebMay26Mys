// cookie is used to track the session ID
//  simulated server-side session value 
const  sessionStore ={
    "abc123":{
        userID:101,
        username:"Naveen",
        role:"Student"
    }
};
// simulated browser cookie value
const browsercookiesessionId="abc123";
const sessionData = sessionStore[browsercookiesessionId];
console.log("Server-side session data :",sessionData);