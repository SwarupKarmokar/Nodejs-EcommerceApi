const express = require('express');
require('dotenv').config();
const errorHandler = require('./middleware/errorHandler')

const port = process.env.PORT || 5000;

// DATABASE CONNECTION 
const db = require('./config/mongoose');
db();


// CREATING SERVER APP 
const app = express();

// MIDDLEWARE 
app.use(express.json());


// ROUTES FOR SERVER 
app.use('/api/product', require('./routes/productRoutes'));
app.use('/api/user', require('./routes/userRoutes'));

// ERROR HANDLER MIDDLEWARE 
app.use(errorHandler);


// ADDING PORT 
app.listen(port, (err) => {
    if (err) { console.log(err); return }
    console.log(`yup server running at port: http://localhost:${port}`)
})