// cpntroller for creation cancel and get bookings is added 
const bookingService = require("../services/booking.service");

// Create Booking
exports.createBooking = async (req,res,next) => {
    try {
        const booking = await bookingService.createBooking(
            req.user._id,
            req.body
        );
        res.status(201).json({
            success:true,
            message:"Booking confirmed.",
            data:booking
        });
    } catch (error) {
        next(error);
    }
};

// Get Bookings 
exports.getMyBookings = async (req,res,next) => {
    try {
        const bookings = await bookingService.getUserBookings(req.user._id);
        res.status(200).json({
            success:true,
            message:"Bookings fetched.",
            data:bookings,
        });
    } catch (error) {
        next(error);
    }
};

// Cancel Bookings 
exports.cancelMyBooking = async (req,res,next) => {
    try {
        await bookingService.cancelMyBooking(req.params.id,req.user._id);
        res.status(200).json({
            success:true,
            message:"Booking cancelled.",
            data:bookings,
        });
    } catch (error) {
        next(error);
    }
};