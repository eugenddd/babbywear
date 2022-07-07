let mongoose = require("mongoose");
// let uniqueValidator = require('mongoose-unique-validator')

let productSchema = mongoose.Schema({
  // category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  // status: { type: Boolean, required: false },
  productAliId: { type: String, required: false },
  productColor: { type: Object, required: false },
  productSize: { type: Object, required: false },
  images: { type: Object, required: false },
  quantity: { type: Number, required: false, default: 1 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },

  ro: {
    slug: { type: String, required: false },
    relationShip: {
      type: Object,
      trim: true,
      unique: false,
      required: false,
    },
    keywords: { type: Object, trim: true, unique: false, required: false },
    productTitle: { type: String, required: false },
    secondTitle: { type: String, required: false },
    productDescription: { type: String, required: false },
    metaDescription: { type: String, required: false },
    additional_information: { type: String, required: false },
    price: {
      type: Number,
      get: (v) => (v / 100).toFixed(2),
      set: (v) => v * 100,
    },

    priceDiscountedTo: { type: Number, required: false },
  },
  es: {
    slug: { type: String, required: false },
    relationShip: {
      type: Object,
      trim: true,
      unique: false,
      required: false,
    },
    keywords: { type: Object, trim: true, unique: false, required: false },
    productTitle: { type: String, required: false },
    secondTitle: { type: String, required: false },
    productDescription: { type: String, required: false },
    metaDescription: { type: String, required: false },
    additional_information: { type: String, required: false },
    priceOnSale: {
      type: Number,
      get: (v) => (v / 100).toFixed(2),
      set: (v) => v * 100,
    },
    priceDiscountedTo: { type: Number, required: false },
  },
  en: {
    slug: { type: String, required: false },
    relationShip: { type: Object, required: false },
    keywords: { type: Object, required: false },
    productTitle: { type: String, required: false },
    secondTitle: { type: String, required: false },
    productDescription: { type: String, required: false },
    metaDescription: { type: String, required: false },
    additional_information: { type: String, required: false },
    priceOnSale: {
      type: Number,
      get: (v) => (v / 100).toFixed(2),
      set: (v) => v * 100,
    },
    priceDiscountedTo: { type: Number, required: false },
  },
});

let Product = mongoose.model("Product", productSchema);
// Listing.plugin(uniqueValidator)
module.exports = Product;
