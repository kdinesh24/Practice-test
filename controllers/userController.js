const User = require('../models/userModel');

const signup = async (req, res) => {
    try {
        const { username, email, password, dateOfBirth } = req.body;

        // Validate required fields
        if (!username || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "Username, email, and password are required",
            });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User with this email already exists",
            });
        }

        // Save new user (password is stored as plain text - NOT RECOMMENDED for production)
        const newUser = new User({ username, email, password, dateOfBirth });
        await newUser.save();

        res.status(201).json({
            success: true,
            message: "User successfully created",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error",
            error: error.message,
        });
    }
};

module.exports = { signup };
