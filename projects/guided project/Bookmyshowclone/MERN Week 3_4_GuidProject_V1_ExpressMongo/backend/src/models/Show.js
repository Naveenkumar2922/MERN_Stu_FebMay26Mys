const mongoose=require("mongoose");

const seatSchema= new mongoose.Schema({
    seatNumber:{
        type:String,
        require:true,

    },
    isBooked:{
        type:Bolllean,
        default:false,
    },
},{_id:false});

const showSchema=new mongoose=new mongoose.Schema({
    movie:{
        type:mongoose.Schema.type.ObjectId,
        ref:"Movie",
        required:true,
        index:true,
    },
    date:{
        type:Date,
        required:true,
        index:true,
    },

    time:{
        type:String,
        required:true,

    },
    totalSeats:{
        type:Number,
        required:true,
    },
    availableSeats:{
        type:Number,
        required:true,

    },
    seats:{
        type:[seatSchema],
        required:true,
    },
    isActive:{
        type:Bollean,
        default:true,
    },
},
{
    
        timestamps:true,
    
    
});

// compound inndex:
showSchema.index({moviieId:1,date:1});

// Add Validation

showSchema.pre("save",function(next){
    if(this.availableSeats>this.totalSeats){
        return next(new Error("Available seats cannot exceeds total seats"));

    }
    next();
});
module.exports = mongoose.model("show",showSchema);