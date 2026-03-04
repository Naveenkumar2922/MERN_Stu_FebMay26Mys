// Nested object
const student={
    firstName:"Varshini",
    lastname:"Naveen",
    score:{
        science:83,
        math:80,
    },
    hobbies:["reading","singing"],
    fullName: function(){
        return this.firstName + ""+this.lastname;
    },
    
    greet(){
        console.log("Hi,",this.fullName());
    }
    };
    console.log(student.fullName());
   
