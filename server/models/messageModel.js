const mongoose = require("mongoose");

const messageSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please add a title."],
    },
    message: {
      type: String,
      required: [true, "Please add a message."],
    },
    priority: {
      type: String,
      required: [true, "Please add a priority."],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Message", messageSchema);
