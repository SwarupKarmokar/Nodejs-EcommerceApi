// CREATING PRODUCT CONTROLLER 

const asyncHandler = require('express-async-handler');
const Product = require('../models/prouductSchema');


// desc: add product 
// route: POST /api/product/ 
// access: private

const createProduct = asyncHandler(async (req, res) => {
    // res.send("create product page")
    const { name, quantity } = req.body;

    if (!name || !quantity) {
        res.status(400);
        throw new Error("All fields are mandatory");
    }

    const product = await Product.create({ name, quantity, user_id: req.user.id });

    res.status(200).json({
        message: "Hurrey Data Added Successfully",
        data: product
    })
})



// desc: get all products 
// route: GET /api/product/
// access: private 

const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({ user_id: req.user.id });
    res.status(200).json({
        message: "Product List",
        data: products
    })
})


// desc: delete product 
// route: DELETE /api/product/:id
// access: private

const deleteProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        res.status(404);
        throw new Error("Contact Not Found");
    }

    await Product.deleteOne({ _id: req.params.id });

    res.status(200).json({
        message: "Deleted Succesfully"
    })
})


// desc: update product 
// route: PUT /api/product/:id
// access: private

const updateProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        res.status(404);
        throw new Error("Product Not Found");
    }

    const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )

    res.status(200).json({
        message: "Successfully Updated",
        data: updatedProduct
    })
})

module.exports = { createProduct, getProducts, deleteProduct, updateProduct }