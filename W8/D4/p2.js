// Timestamp and adavnced queries
const mongoose=require('mongoose')

async function main(){
    try{
       await mongoose.connect("mongodb://127.0.0.1:27017/datedb");
       console.log("MongoDB Connected")
       const schema = new mongoose.Schema(
        {
            name:String,
        },
    {
        timestamps:true
    });
    const Model = mongoose.model('LogTime', schema);
    //  await Model.deleteMany();

    // await Model.create([
    //     {name:"Ananya"},
    //     {name:"Naveen"},
    //     {name:"Anven"},
    //      {name:"Ravi"},
    //     {name:"Tejas"},
    //     {name:"Seena"}  
    // ]);
    const recent = await Model.find({
    createdAt: {
        $gte: new Date(Date.now() - 900000) // last 5 mins
    }
    }).sort({ createdAt: -1 });


    console.log("Recent:",recent)
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