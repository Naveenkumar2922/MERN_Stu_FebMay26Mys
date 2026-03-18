// Sequential await vs parallel promise execution
function taskA(){
    return new Promise(function(resolve){
        setTimeout(function(){
        resolve("task A complete");
 },1000);
    });
}

function taskB(){
    return new Promise(function(resolve){
        setTimeout(function(){
        resolve("task B complete");
 },1000);
    });
}
async function reunSequence(){
    console.time("sequential");
    const a = await taskA();
    const b = await taskB();
    console.timeEnd("sequential");
    console.log(a);
    console.log(b);
}
await reunSequence();

async function runParallel(){
    console.time("parallel");
    const results = await Promise.all([taskA(),taskB()]);
    console.timeEnd("parallel");
    console.log(results[0]);
        console.log(results[1]);

}
await runParallel();
