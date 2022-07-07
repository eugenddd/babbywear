const express = require("express");
const router = express.Router();

const cartController = require("../controllers/cart");

// const upload = require("../../../config/multer"); //upload.upload,

router.get("/cart/:id", cartController.getCartById);
router.post("/cart", cartController.addCart);

module.exports = router;
