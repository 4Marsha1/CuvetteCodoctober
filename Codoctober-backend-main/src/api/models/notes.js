const mongoose = require("mongoose");


const notesSchema = new mongoose.Schema({
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
	Content:{
        type:String, 
    }
},{
    timestamps:true
});


const Notes = mongoose.model("Note", notesSchema);
module.exports = Notes;