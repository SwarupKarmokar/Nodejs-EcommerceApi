const express = require('express');
const router = express.Router();

// IMPORTING USER FUNCTION FROM USER CONTROLLER 
const { registerUser, loginUser } = require('../controllers/userController')

// CREATING ALL ROUTES FOR USER 
router.route('/register').post(registerUser);
router.route('/login').post(loginUser);

module.exports = router;