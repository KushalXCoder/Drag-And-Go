import { User } from "../models/user.model.js";

const loginController = async (req,res) => {
    try {
        const {email, password} = req.body;

        const user = await User.findOne({email});
        if(!user) {
            console.log("User doesn't exist");
            return res.status(400).json({error: "User doesn't exist"});
        }

        const checkUserPassword = await user.checkPassword(password);
        if(!checkUserPassword) {
            console.log("Incorrect Password");
            return res.status(400).json({error: "Incorrect Password"});
        }

        const token = await user.generateJWT();

        return res.status(200).send({user, token});
    } catch (error) {
        console.log(error);
        res.status(400).json({error: "Error logging in"});   
    }
}

export default loginController;