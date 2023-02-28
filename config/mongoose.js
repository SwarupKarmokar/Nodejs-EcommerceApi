// FOR CONNECTING DATABASE TO OUR APP 

const mongoose = require('mongoose');
require('dotenv').config();
mongoose.set('strictQuery', false);

const db = async ()=> {
    try {
        mongoose.connect(process.env.MONGO_URL);
        console.log("database connected");
    }

    catch(err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = db;