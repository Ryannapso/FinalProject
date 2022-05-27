const mongoose = require("mongoose");
const customerSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "."],
    },
    lastName: {
      type: String,
      required: [true, "."],
    },
    phoneNumber1: {
      type: String,
      required: [true, "."],
    },
    phoneNumber2: {
      type: String,
    },
    address: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Customer", customerSchema);
