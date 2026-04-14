// Validation and Schema constraints
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    age:{ type: Number,min:18},
    role:{type:String,
        enum:["admin","user","manager"]
    },
    email:{
        type:String,
        match:/.+@.+\..+/
        // word@domainname.com .co.in/.org/.edu.in
    }
});
const User = mongoose.model("HookValidation",userSchema);
 async function runValidationDemo(){
    try{
        const InvalidUser = new User({
            age:15,
            role:"guest",
            email:"not validemail"

        });
        const validUser = new User({
            name:"Naveen",
            age:19,
            role:"admin",
            email:"navi@gmail.com"

        });
        await InvalidUser.validate();

    }
    catch(error){
        console.log("validation error found:");
        for(const fieldName in error.errors){
            console.log(fieldName+":",error.errors[fieldName].message);
        }
    }
 }
 runValidationDemo();