import {User} from "../models/user.model.js";

const signinController = async (req,res) => {
    try {
        const {firstname, lastname, email, password} = req.body;

        if(!email || !password) {
            console.log("Fields required");
            return res.status(400).json({error: "All fields are required"});
        }

        const findUser = await User.findOne({email});
        if(findUser) {
            console.log("User exists");
            return res.status(400).json({error: "User already exists"});
        }

        const hashedPassword = await User.hashPassword(password);
        const user = await User.create({firstname, lastname, email, password: hashedPassword});
        const token = await user.generateJWT();

        return res.status(200).send({user, token});
    } catch (error) {
        console.log(error);
        res.status(400).json({error: "Error sigining in"});
    }
}

export default signinController;