const mongoose = require("mongoose");

const ticketSchema = mongoose.Schema(
  {
    deviceType: {
      type: String,
      required: [true, "Please add the device type."],
    },
    problem: {
      type: String,
      required: [true, "Please add a problem."],
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "ticket has to be linked to a customer."],
      ref: "Customer",
    },
    technician: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "ticket has to be linked to a technician."],
      ref: "User",
    },
    status: {
      type: String,
      enum: ["Open", "Close", "Other"],
      required: [true, "Please add satus."],
    },
    cost: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Ticket", ticketSchema);
