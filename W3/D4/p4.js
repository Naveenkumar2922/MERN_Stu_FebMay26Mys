// // filter method
// let marks=[75,49,56,70,82,51,68];
// // let passed=marks.filter(mark=>mark >=70);
// console.log(marks);
// console.log(passed);

let student=[
    {name:"Naveen",marks:75},
     {name:"varshini",marks:49},
      {name:"vishnu",marks:56},
       {name:"Ashwini",marks:70},
        {name:"Ravi",marks:82},
         {name:"Abhi",marks:51},
          {name:"swarna",marks:68}
];
console.log(student);
let passed =student
.filter(student => student.marks >=70).map(student => student.name);
console.log("passed students:",passed);

