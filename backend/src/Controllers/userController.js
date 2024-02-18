const User = require('../Models/userModels');

const loginUser = async (req, res) => {
    res.json({ message: "Login user" });
}

const registerUser = async (req, res) => {

    const {fullname, username, email, password} = req.body;

    
    try {
        const user = await User.register(fullname, username, email, password);
        res.status(201).json({email, user});
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
    
}

module.exports = {
    loginUser,
    registerUser
}