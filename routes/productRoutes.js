const express = require('express');
const router = express.Router();


const { createProduct, getProducts, deleteProduct, updateProduct } = require('../controllers/productController');
const validateToken = require('../middleware/validateToken');


// VALIDATING ROUTES WITH TOKEN 
router.use(validateToken);

router.route('/').post(createProduct).get(getProducts);
router.route('/:id').delete(deleteProduct).put(updateProduct);


module.exports = router;