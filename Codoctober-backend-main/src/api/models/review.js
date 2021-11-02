const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  Reviewer_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Reviewer",
      },
	Rating: Number,
	Reviews:[{String}],

});


const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;