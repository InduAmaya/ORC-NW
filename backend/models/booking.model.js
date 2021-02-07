const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    
    name: {
        type: String,
    },

    email: {
        type: String,
    },

    contact: {
        type: Number,
    },

    days: {
        type: Number,
    },
    
    participants: {
        type: Number,
    }
}, 
    {collection: "Booking"}
);

module.exports = mongoose.model("Booking", bookingSchema);
