

function tagPassword(password){

    if(password.length<8 ){
        return "Weak";
    }
    if(password.length>=8 &&password.length < 12 ){
        return "Medium";
    }
    if(password.length>=12 ){
        return "Strong";
    }
    if( typeof password !== "string"){
        return "Invalid";
    }
}
console.log(tagPassword("abc"));
console.log(tagPassword(123));
console.log(tagPassword("abcde1234"));
console.log(tagPassword("abcdefgh123456789"));