const express = require('express');
const { registerUser, loginUser } = require('../Controllers/userController');

const router = express.Router();

router.post('/login', loginUser)

router.post('/register', registerUser)

// console.log("userRoute.js is running")

module.exports = router;