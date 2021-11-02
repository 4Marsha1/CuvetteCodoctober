const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

class AuthService {
    constructor({ UserModel}) {
        this._UserModel = UserModel;
        // this._MailService = MailService;
        
    }
    _toJSON(user) {
        const userObj = user.toObject();
        delete userObj.password;
        delete userObj.tokens;

        return userObj;
    } 

    async _generateAuthToken(user) {
        const token = jwt.sign(
            { _id: user._id.toString() },
            process.env.JWT_SECRET
        );
        // user.tokens.push(token);
        await user.save();
        return token;
    }

    _generateForgotPasswordToken(user) {
        const secret = process.env.JWT_SECRET + user._id;
        const payload = {
            email: user.email,
            id: user._id,
        };
        const token = jwt.sign(payload, secret, { expiresIn: "15m" });
        return token;
    }

    _checkResetToken(id, token) {
        const secret = process.env.JWT_SECRET + id;
        try{
            jwt.verify(token, secret);
        }catch(err){
                    err = new Error("Unauthorized, Try again");
                    err.statusCode = 401;
                    err.name = "Unauthorised";
                    throw err;
        }
    }

    async checkAuthToken(token) {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // console.log(decoded,"decoded")
        const user = await this._UserModel.findOne({ _id: decoded._id });
        // console.log(user,"decoded")
        if (!user) {
            const err = new Error("Unauthorized");
            err.statusCode = 401;
            err.name = "Unauthorized";
            throw err;
        }
        return user;
    }

    async login(email, password) {
        const user = await this._UserModel.findOne({ email });
        if (!user) {
            const err = new Error("Unable To Login");
            err.statusCode = 401;
            err.name = "Unauthorized";
            throw err;
        }

        const isMatched = await bcrypt.compare(password, user.password);

        if (!isMatched) {
            const err = new Error("Unable To Login");
            err.statusCode = 401;
            err.name = "Unauthorized";
            throw err;
        }
        const token = await this._generateAuthToken(user);
        return { user: this._toJSON(user), token };
    }

    async signUp(name, email, password,profileImage) {
        // console.log(name, email, password,profileImage)
        try {

            const user = await this._UserModel.create({
                name,
                email,
                password, 
                profileImage,
            });
            const token = await this._generateAuthToken(user);
            return { user: this._toJSON(user), token };
        } catch (error) {
            console.log(error.message);
            throw new Error("Email already registered");
        }

        
    }

    async logout(user, token) {
        // user.tokens = user.tokens.filter((token) => {
        //     return token !== token;
        // }); 
        if(user&&token){
            return true
        }
        const err = new Error("Unable To Logout");
        err.statusCode = 401;
        err.name = "Unauthorized";
        throw err;
    }

    async logoutAll(user, token) {
        user.tokens = [];
        await user.save();
    }

    // async forgotpassword(email) {
    //     const user = await this._UserModel.findOne({ email });
    //     try {
    //     if (!user) {
    //         const err = new Error();
    //         err.name = "NoEmail";
    //         throw err;
    //     }
    //     const token = this._generateForgotPasswordToken(user);
    //     await this._MailService.sendForgotPasswordMail(user, token);
    //     } catch (error) {
    //         console.log(error.message);
    //         if(error.name === "NoEmail")
    //             {
    //                 const err = new Error("Enter the email once again");
    //                 err.statusCode = 404;
    //                 err.name = "NoEmail";
    //                 throw err;
    //             }
    //         throw new Error("Service couldnot be completed")
    //     }
        
    // } 
 
    // async resetpassword(id, token, password) {
    //     const user = await this._UserModel.findById(id);
    //     if (!user) {
    //         const err = new Error("No Such User");
    //         err.statusCode = 404;
    //         err.name = "NotFound";
    //         throw err;
    //     }
    //     this._checkResetToken(user._id, token);
    //     user.password = password;
    //     await user.save();
    //     return this._toJSON(user);
    // }
}

module.exports = AuthService;
