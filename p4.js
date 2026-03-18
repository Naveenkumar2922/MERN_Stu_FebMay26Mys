// combine  multiple promise-based steps with async/await
function getOrderId(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(501);
        },501);
    });
}

function getOrderDetails(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve({
                 id:getOrderId,
                product:"laptop",
                quantity:2
            },1000);
        });
    });
}
async function showOrderSummary(){
    const orderId = await getOrderId();
    console.log("Order id:",orderId);

    const OrderDetails = await getOrderDetails(orderId);
    console.log("Product:",OrderDetails.product);
    console.log("Quantity:",OrderDetails.quantity);
}
showOrderSummary();