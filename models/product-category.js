const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  category: { type: String, required: true }
});

const ProductCategory = mongoose.model("ProductCategory", categorySchema);

module.exports = ProductCategory;
