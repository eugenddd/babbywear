const Product = require("../models/ProductModel");

module.exports.productBySlug = async function (req, res) {
  try {
    console.log("============>>>>>", req.params.slug);
    let product = await Product.findOne({ slug: req.params.slug });
    await res.json(product);
  } catch (err) {
    await res.status(401).json(`this product not exist: ${err}`);
  }
};

module.exports.getProductById = async function (req, res) {
  try {
    let product = await Product.findById({ _id: req.params.productId });
    await res.json(product);
  } catch (err) {
    await res.status(401).json(`Not exist: ${err}`);
  }
};

module.exports.getProducts = async function (req, res) {
  try {
    let product = await Product.find();
    await res.send(product);
  } catch (error) {
    await res.status(401).json(error);
  }
};

// function slugifyTitle(value) {
//   const val = value.split("-");
//   const val2 = val[0].toLowerCase().replace(/\W+/g, "-");
//   return val2;
// }

module.exports.addProduct = async (req, res) => {
  // const slug = slugifyTitle(req.body.title);
  try {
    const product = await new Product({
      status: req.body.status,
      listingStatus: req.body.listingStatus,
      productAliId: req.body.productAliId,
      productColor: req.body.productColor,
      productSize: req.body.productSize,
      images: req.body.images,
      es: req.body.es,
      en: req.body.ro,
      ro: req.body.en,
    });
    let newProduct = await product.save();
    console.log(newProduct);
    await res.status(200).json(newProduct);
  } catch (error) {
    console.log(error);
  }
};

module.exports.deleteProductById = async (req, res) => {};
