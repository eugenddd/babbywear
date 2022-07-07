const express = require("express");
const router = express.Router();

const productController = require("../controllers/item");

// const upload = require("../../../config/multer"); //upload.upload,

router.get("/item/:id", productController.getItem);

module.exports = router;
// Knott's Berry Farm One Day Admission Theme Park
