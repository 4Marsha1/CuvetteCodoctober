const asyncHandler = require("express-async-handler");
var UserModel = require("../models/profile");
const AuthService = require("../services/auth.service");
// const MailService = require("../services/vendor/MailService");
const authService = new AuthService({
    UserModel,
    // MailService: new MailService(),
});

var auth = asyncHandler(async (req, res, next) => {
        try{
            // console.log(req.header("Authorization").replace("Bearer ", ""))
            req.token = req.header("Authorization").replace("Bearer ", "");
            req.user = await authService.checkAuthToken(req.token);  
            next();
        } catch(err){
             err = new Error("Please Authenticate");
            err.statusCode = 401;
            err.name = "NoAuth";
            throw err
        }        
});

module.exports=auth
