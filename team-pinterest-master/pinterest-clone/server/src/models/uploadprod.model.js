const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    userName: { type: String, required: true },
    title:  { type: String, required: true },
    image_urls: [{ type: String, required: true }],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("uploadprod", productSchema);
