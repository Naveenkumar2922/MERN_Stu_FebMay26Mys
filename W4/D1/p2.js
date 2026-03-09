// try catch and finally block(to check if the error is there or not)
function parseConfig(text){
    try{
        let config = JSON.parse(text);
        console.log(config);
        return config;
    }
    catch (err){
        console.log("error parsing config:",err.message);
        return null;
    }
    finally{
        console.log("finally block executed:");
    }
}
parseConfig('{"theme":"dark"}');
parseConfig('{"theme"}');


