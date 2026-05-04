const showService = require("../services/show.service");

// create Show: Admin
exports.createShow=async(req,res,next)=>{
    try{
        const show= await showService.createShow(req.body);
        res.status(201).Json({
            success:true,
            message:"show created successfully",
            data:show,

        });

    }
    catch(err){
        next(err);
    }
}
// get show
exports.getShows=async(req,res,next)=>{
    try{
        const show= await showService.getShows(req.query);
        res.status(200).Json({
            success:true,
            message:"shows fetched successfully",
            data:shows,

        });

    }
    catch(err){
        next(err);
    }
};
// Get single show
exports.getShowById=async(req,res,next)=>{
    try{
        const show= await showService.getshowbyId(req.params.id);
        res.status(200).Json({
            success:true,
            message:"show fetched successfully",
            data:show,

        });

    }
    catch(err){
        next(err);
    }
};

// update show
exports.updateshow=async(req,res,next)=>{
    try{
        const show= await showService.updateShow(req.params.id,req.body);
        res.status(200).Json({
            success:true,
            message:"show updated successfully",
            data:show,

        });

    }
    catch(err){
        next(err);
    }
}

// delete show - admin
exports.deleteshow=async(req,res,next)=>{
    try{
        const show= await showService.deleteshow(req.params.id);
        res.status(200).Json({
            success:true,
            message:"show deleted successfully",
            data:show,

        });

    }
    catch(err){
        next(err);
    }
}