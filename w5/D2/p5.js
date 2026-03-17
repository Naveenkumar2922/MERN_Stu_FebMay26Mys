// callback error
function dividenumbers(a,b,callback){
    if(b==0){
        callback("cannot divide by zero.",null);
        return;
    }
    const result=a/b;
    callback(null,result);
}
dividenumbers(100,0,function(error,result){
    if(error){
        console.log("error:",error);
        return;
    }
    console.log("result:",result);
});