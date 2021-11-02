const express =require('express');
const UserController =require("../contollers/user");
const auth=require("../middleware/auth");
const router = express.Router();

// post
router.post('/login', UserController.login);
router.post('/signup', UserController.signup);
router.post('/logout',auth, UserController.logout);
router.post('/testing',auth, UserController.testing);

module.exports=router;
