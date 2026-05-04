const Show= require("../models/show");
const Movie = require("../models/Movie");
const { findById } = require("../models/User");
const show = require("../models/show");
const show = require("../models/show");

// Genreate Seats
const generateSeats =(totalSeats)=>{
    const seats =[];
    const rows=["A","B","C","D","E","F","G","H"];
    let seatCount=0;
    for(let row of rows){
        for(let i=1; i<=10;i++){
            if(seatCout>=totalSeats)break;
            seats.push({
                seatNumber:`${row}${i}`,
                isBooked:false,
            });
            seatCount++;

        }
    }
    return seats;

};


// create show
exports.createShow = async({movieId,date,time,totalSeats})=>{
// check if movie exists
const movie = await Movie.findById(movieId);
if(!movie)
    throw new Error("movie not found");

// Generate seats
const seats = generateSeats(totalSeats);

const show = await show.create({
    movieId,
    date,
    time,
    totalSeats,
    avaialbleSeats:totalSeats,
    seats,
});
return show;
}

exports.getShow = async({movieId,date})=>{
    const filter={isActive:true};
    if(movieId)filter.movieId=movieId;
    if (date)filter.date=new Date(date);

    const shows = await Show.find(filter)
    .populate("movieId")
    .sort({date:1});
    return shows;
};

// get show by Id
exports.getshowbyId=async(id)=>{
    const show=  await Show.findById(id).populate("movieId");
    if(!show)
        throw new Error("Show not found");
    return show;
};

// update show
exports.updateShow=async(id,data)=>{
    const show=await show.findByIdAndUpdate(id,data,{
        returnDocument:"after",
        runValidators:true,
    });
    if(!show)
        throw new Error("Show not found");
    return show;
};
// delete show
exports.deleteMovie = async (id) => {
    //Soft delete
    const show = await Show.findByIdAndUpdate(id,{
        isActive:false,
    }); 
    if(!show)
        throw new Error("show not found");
};
