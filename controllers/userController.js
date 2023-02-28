const asyncHandler = require('express-async-handler');
const User = require('../models/userSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();


// desc: Register an user 
// route: POST /api/user/register 
// access: public 

const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        res.status(400);
        throw new Error("All Fields Mandatory");
    }

    const userAvailable = await User.findOne({ email });

    if (userAvailable) {
        res.status(400);
        throw new Error("User Already Exists");
    }

    const hashPassword = await bcrypt.hash(password, 10);


    const user = await User.create({
        username, email, password: hashPassword
    })

    res.status(200).json({
        message: "Successfully Registered",
        data: { _id: user.id, email: user.email }
    })
})




// desc: User Login 
// route: POST /api/user/login 
// access: public 

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400);
        throw new Error("All Fields Mandatory")
    }

    const user = await User.findOne({ email });

    // COMPARING PASSWORD WITH HASH PASSWORD 
    if (user && bcrypt.compare(password, user.password)) {
        const accessToken = jwt.sign(
            {
                user: {
                    username: user.username,
                    email: user.email,
                    id: user.id
                }
            }, process.env.SECRET_KEY, { expiresIn: '30m' }
        )
        res.status(200).json({
            token: accessToken
        })
    }

    else {
        res.status(401);
        throw new Error("Email || Password not valid")
    }
})

module.exports = { registerUser, loginUser }