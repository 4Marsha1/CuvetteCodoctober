const router = require("express").Router();
const asyncHandler = require("express-async-handler");
const profileModel = require("../models/profile");
const AuthService = require("../services/auth.service");
// const MailService = require("../services/vendor/MailService");

const authService = new AuthService({
    UserModel:profileModel,
    // MailService: new MailService(),
});

const userController = {
    
    login: asyncHandler(async (req, res) => {
        const { email, password } = req.body;
        const { user, token } = await authService.login(email, password);
        res.status(200).json({ user, token });
    }),
    signup: asyncHandler(async (req, res) => {
        const { name, email, password ,profileImage} = req.body;
        const { user, token } = await authService.signUp(name, email, password,profileImage);
        res.status(201).json({ user, token });
    }),
    logout:asyncHandler(async (req, res) => {
        await authService.logout(req.user, req.token);
        res.status(200).send();
    }),
    
    testing:asyncHandler(async (req, res) => {
        const {testing}=req.body;
        res.status(200).json({message:"done",testing:testing});
    }),
    
    // forgot:asyncHandler(async (req, res) => {
    //     const { email } = req.body;
    //     await authService.forgotpassword(email);
    //     res.json("Link has been sent to registered email");
    // }),
    // reset: asyncHandler(async (req, res) => {
    //     const { id, token } = req.params;
    //     const { password } = req.body;

    //     // console.log("req.body", id);
    //     const user = await authService.resetpassword(id, token, password);
    //     res.status(201).json(user);
    // })
}



module.exports = userController;
