import { Router } from "express";
import { Usermodel } from "../Database/db.js";
import jwt from "jsonwebtoken";
import HashVerifier from "../functions/hashVerifier.js";

export const LoginRoute = Router();

LoginRoute.post("/login", async (req, res) => {
    const { email, password } = req.body;

    if (email && password) {
        try {
            const exist_user = await Usermodel.findOne({ email });
            if (exist_user) {
                const isPassword = await HashVerifier({ plain_password: password, hashed_password: exist_user.password });
                if (isPassword) {
                    console.log("login");
                    // Create token
                    const token = jwt.sign({ name: req.body.exist_user }, process.env.JWT_SECRET, { algorithm: "HS256", expiresIn: "1d" });
                    const { email, firstname } = exist_user
                    let userdata = { email, firstname, token }; // Assigning all user data to userdata
                    console.log(userdata);
                    return res.status(200).json({ userdata, message: "logged in" });
                }
                else return res.status(401).send("Wrong Password");
            }
            else {
                console.log("user not exist");
                return res.status(404).send("No user found");
            }
        } catch (e) {
            console.error("Error", e);
            return res.status(500).send("Internal Server Error");
        }
    } else {
        return res.status(400).send("Email and password are required");
    }
});
