// TTL : time-to-live
const mongoose=require('mongoose')

async function main() {
    try{
       await mongoose.connect("mongodb://127.0.0.1:27017/datedb");
       console.log("MongoDB Connected");
       const otpSchema= new mongoose.Schema({
        code:String,
        createdAt:{
            type:Date,
            default:Date.now,
            expires:30 //time 30sec
        }
        
       });
       const OTP = mongoose.model('OTP',otpSchema);
       await OTP.deleteMany();

       await OTP.create({code:"8073189458"});
       console.log("OTP created");
    }
 catch(error){
         console.error("Error:", error.message);
    }
    finally {
            await mongoose.disconnect();
            console.log("Disconnected from DB.");
        }
}
main();