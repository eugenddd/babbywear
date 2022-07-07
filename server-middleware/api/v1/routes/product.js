const express = require("express");
const router = express.Router();


const productController = require("../controllers/product");

// const upload = require("../../../config/multer"); //upload.upload,

router.post("/product/add", productController.addProduct);
router.get("/products", productController.getProducts);
router.get("/product/edit/:productId", productController.getProductById);
router.get("/product/:slug", productController.productBySlug);
router.delete("/product/edit/:productId", productController.deleteProductById);

module.exports = router;
// Knott's Berry Farm One Day Admission Theme Park