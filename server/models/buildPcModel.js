const mongoose = require("mongoose");
const buildPcSchema = mongoose.Schema(
  {
    cpu: {
      type: String,
      required: [true, "."],
    },
    motherboard: {
      type: String,
      required: [true, "."],
    },
    memory: {
      type: String,
      required: [true, "."],
    },
    videoCard: {
      type: String,
      required: [true, "."],
    },
    case: {
      type: String,
      required: [true, "."],
    },
    powerSupply: {
      type: String,
      required: [true, "."],
    },
    storage1: {
      type: String,
      required: [true, "."],
    },
    storage2: {
      type: String,
    },
    cpuCooler: {
      type: String,
      required: [true, "."],
    },
    OperatingSystem: {
      type: String,
    },
   
    
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("BuildPc", buildPcSchema);
