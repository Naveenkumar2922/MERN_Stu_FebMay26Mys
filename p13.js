// function scope
function scope(){
    var insidevar=10;
    let insidelet=20;
    const insidecost=30;
    // console.log(insidevar);
    // console.log( insidelet);
    // console.log(insidecost);
}
scope();
// console.log(insidevar);
     // console.log(insidevar);
    // console.log( insidelet);
    // console.log(insidecost);

    function  varfunctionScoped(){
        if(true){
            var x=40;
            let y=50;
        }
        console.log("x",x);
        console.log("y",y);
    }
varfunctionScoped();