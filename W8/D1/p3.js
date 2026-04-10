// Applied filters to the query using comparision operators
const mongoose = require("mongoose");
async function runFilterDemo(){
    try{
        await mongoose.connect("mongodb://localhost:27017/merntraining");
         console.log("MongoDB connected successfully");

         const ProductSchema = new mongoose.Schema({
            name:String,
            price: Number,
            category: String,
            status:String
         });
         const Product = mongoose.models.Product || mongoose.model("Product",ProductSchema);
         await Product.create([
            {name:"Book",
                price:300,
                category:"stationary",
                status:"active"
            },
            {name:"Pen",
                price:3000,
                category:"stationary",
                status:"inactive"
            },
            {name:"Laptop",
                price:60000,
                category:"Electronics",
                status:"active"
            },
            {name:"CD",
                price:50,
                category:"Electronics",
                status:"inactive"
            }
         ]);
         const notequalquery=await Product.find({status:{$ne:"6000"}});
         console.log("product which are active:",notequalquery);
         
         await mongoose.connection.close();
                 console.log("connection closed");

    }
      
    catch(error){
        console.log("filter demo error:",error.message);
    }
}
runFilterDemo();
