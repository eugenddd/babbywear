const Cart = require("../models/cartModel");

module.exports.getCartById = async function (req, res) {
  try {
    let cart = await Cart.findById({ _id: req.params.cartId });
    await res.json(cart);
  } catch (err) {
    await res.status(401).json(`Not exist: ${err}`);
  }
};

module.exports.addCart = async (req, res) => {
  // console.log("addCart", req.body.products.product);
  try {
    const cart = await new Cart({
      products: { product: req.body.products._id },
    });
    let newCart = await cart.save();
    console.log(newCart);
    await res.status(200).json(newCart);
  } catch (error) {
    console.log(error);
  }
};

module.exports.deleteCartById = async (req, res) => {};
