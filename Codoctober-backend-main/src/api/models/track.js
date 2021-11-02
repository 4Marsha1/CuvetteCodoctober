const mongoose = require("mongoose");

// Visibility true means that the track is visible to the public
// Visibility false means that the track is not visible to the public

const trackSchema = new mongoose.Schema({
    created_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",  
    },
    title: {
        type: String,
        require: true,
    },
    content: {
        type: String,
        require: true,
    },
    resoources: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Resource",
    }],
    // overallRating: {
    //     type: Number,
    // },
    // reviews: {
    //     type: [mongoose.Schema.Types.ObjectId],
    //     ref: "Review",
    // },
    visibility:{
        type:Boolean,
        default:true
    },
	domain: [{
        type: String
    }],
});


const Tracks = mongoose.model("Tracks", trackSchema);
module.exports =Tracks;