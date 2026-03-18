// Why we use aync/await
function getUser(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve({id:101,name:"Naveen"});
        },1000);
    });
}
function getOrders(userId){
    return new Promise(function(resolve){
    setTimeout(function(){
        resolve(["oredr-A","order-B"]);
    },1200);
});
}
 async function shoowUserAndOrders(){
    const user = await getUser();
    // console.log("user loaded:",user.name);

    const Orders = await getOrders(user.id);
    console.log("Orders loaded",Orders);

}
shoowUserAndOrders();
