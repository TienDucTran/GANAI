import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import bcrypt from "bcrypt";
import User from "./Schema/User.js";
import { nanoid } from "nanoid";
import jwt from "jsonwebtoken";
import cors from "cors";

const server = express();
let PORT = process.env.PORT;
mongoose
    .connect(process.env.DB_LOCATION, {
        autoIndex: true,
    })
    .then(() => console.log("Connected to MongoDB "))
    .catch((err) => console.error("Error connecting to MongoDB:", err));

server.use(express.json());
server.use(cors());
const formatDatatoSend = (user) => {
    const access_token = jwt.sign(
        { id: user._id },
        process.env.SECRET_ACESS_KEY,
        { expiresIn: "100D" }
    );
    return {
        access_token: access_token,
        profile_img: user.personal_info.profile_img,
        username: user.personal_info.username,
        fullname: user.personal_info.fullname,
    };
};

const generateUsername = async (email) => {
    // Extract username from email
    let username = email.split("@")[0];
    // Check if username already exists
    let existingUser = await User.exists({
        "personal_info.username": username,
    }).then((result) => result);
    existingUser ? (username += nanoid()) : "";
    // Generate and send the username
    return username;
};

server.post("/signup", async (req, res) => {
    let { fullname, email, password } = req.body;

    ///
    try {
        const existingUser = await User.findOne({
            "personal_info.email": email,
        });
        if (existingUser) {
            return res.status(400).json({ error: "Email already exists" });
        }

        // Extract username from email
        const username = await generateUsername(email);

        // Hash the password
        const hash = await bcrypt.hash(password, 10);

        // Create and save the user
        const user = new User({
            personal_info: { fullname, email, password: hash, username },
        });
        const savedUser = await user.save();

        // Send success response
        return res.status(200).json({ user: savedUser });
    } catch (err) {
        if (err.code === 11000) {
            return res.status(400).json({ error: "Email already exists" });
        }
        return res.status(500).json({ error: err.message });
    }
});

server.post("/signin", async (req, res) => {
    try {
        if (!req.body.email || !req.body.password) {
            return res
                .status(400)
                .json({ error: "Email and password are required!" });
        }
        const user = await User.findOne({
            "personal_info.email": req.body.email,
        });

        if (!user) {
            return res.status(401).json({ error: "Wrong email!" });
        }

        const isPasswordValid = await bcrypt.compare(
            req.body.password,
            user.personal_info.password
        );

        if (!isPasswordValid) {
            return res.status(401).json({ error: "Wrong password!" }); // Generic error
        }

        // const { password, ...info } = user._doc;

        res.status(200).json(formatDatatoSend(user));
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
});
server.listen(PORT, () => {
    console.log("listening on port" + PORT);
});
