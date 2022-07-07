let mongoose = require("mongoose");

let cartSchema = mongoose.Schema({
  orderId: { type: String, required: false },
  products: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      quantity: { type: Number, required: false },
      price: { type: Number, required: false },
    },
  ],
  totalPrice: { type: Number, required: false },
  status: { type: String, required: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

let Cart = mongoose.model("Cart", cartSchema);
// Listing.plugin(uniqueValidator)
module.exports = Cart;
