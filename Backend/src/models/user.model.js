import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// For now schema is based upon the Sign Up form

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
    },
    refreshToken: {
        type: String,
    }
}, {timestamps: true});

userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password,10);
}

userSchema.methods.checkPassword = async function (password) {
    return await bcrypt.compare(password,this.password);
}

userSchema.methods.generateJWT = function () {
    return jwt.sign({email: this.email}, process.env.JWT_SECRET);
}

export const User = mongoose.model("User", userSchema);