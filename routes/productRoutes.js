const express = require('express');
const router = express.Router();

// IMPORTING ALL FUNCTION FROM CONTROLLER 
const { createProduct, getProducts, deleteProduct, updateProduct } = require('../controllers/productController');

// IMPORTING TOKEN
const validateToken = require('../middleware/validateToken');


// VALIDATING ROUTES WITH TOKEN 
router.use(validateToken);

// CREATING ALL ROUTES FOR PRODUCTS API 
router.route('/').post(createProduct).get(getProducts);
router.route('/:id').delete(deleteProduct).put(updateProduct);


module.exports = router;