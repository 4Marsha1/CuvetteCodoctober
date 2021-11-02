const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");


const profileSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique:true
    },
    password: {
        type: String,
        require: true,
    },
    profileImage: {
        type: String,
        required: false,
    }
});


profileSchema.pre("save", async function (next) {
    var user = this;
    if (user.isModified("password")){
        user.password = await bcrypt.hash(user.password, 8);
    } 
    next();
});

const User = mongoose.model("User", profileSchema);
module.exports = User;