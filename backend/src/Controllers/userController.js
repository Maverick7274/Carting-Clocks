const User = require("../Models/userModels");
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: __dirname + "/config/config.env" });

const createToken = (_id) => {
	return jwt.sign({ _id }, process.env.JWT_SECRET, {
        expiresIn: 3 * 24 * 60 * 60,
	});
};

const loginUser = async (req, res) => {
	
    const { username, password } = req.body;

    try {
        const user = await User.login(username, password);

        const token = createToken(user._id);

        res.status(200).json({ username, token });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
    

};

const registerUser = async (req, res) => {
	const { fullname, username, email, password } = req.body;

	try {
		const user = await User.register(fullname, username, email, password);

		const token = createToken(user._id);

		res.status(201).json({ email, token });
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

module.exports = {
	loginUser,
	registerUser,
};
