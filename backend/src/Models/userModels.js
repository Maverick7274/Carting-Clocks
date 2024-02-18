const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
	username: {
		type: String,
		unique: true,
		required: true,
	},
	email: {
		type: String,
		unique: true,
		required: true,
	},
});


userSchema.statics.register = async function (fullname, username, email, password) {

    if (!fullname || !username || !email || !password) {
        throw new Error("All fields are required!");
    }


    if (!validator.isEmail(email)) {
        throw new Error("Email is invalid!");
    }
    if (!validator.isStrongPassword(password)) {
        throw new Error("Password is not strong enough!");
    }
    if (!validator.isAlphanumeric(username)) {
        throw new Error("Username is invalid!");
    }

    const existingEmail = await this.findOne({email});
    const existingUsername = await this.findOne({username});
    // console.log("userModel.js is running");

    if (existingEmail) {
        throw new Error("Email already exists!");
    }
    if (existingUsername) {
        throw new Error("Username already exists!");
    }


    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await this.create({
        fullname,
        username,
        email,
        password: hashedPassword,
    });

    return user;
}

userSchema.statics.login = async function (username, password) {

    if (!username || !password) {
        throw new Error("All fields are required!");
    }

    const user = await this.findOne({ username });

    if (!user) {
        throw new Error("Username does not exist!");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        throw new Error("Password is incorrect!");
    }

    return user;

}



const User = mongoose.model("User", userSchema);

module.exports = User;
