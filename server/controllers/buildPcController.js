const BuildPc = require("../models/buildPcModel");

// Get build pc
// route GET /build pc
const getBuildPc = async (req, res) => {
  const buildPc = await BuildPc.find();

  res.status(200).json(buildPc);
};

// Set 
// 
const setBuildPc = async (req, res) => {
  if (!req.body.cpu) {
    res.status(400);
    throw new Error(".");
  }

  if (!req.body.motherboard) {
    res.status(400);
    throw new Error("Must set a password.");
  }
  if (!req.body.memory) {
    res.status(400);
    throw new Error("Must set a password.");
  }
  if (!req.body.videoCard) {
    res.status(400);
    throw new Error("Must set a password.");
  }
  if (!req.body.case) {
    res.status(400);
    throw new Error("Must set a password.");
  }
  if (!req.body.powerSupply) {
    res.status(400);
    throw new Error("Must set a password.");
  }
  if (!req.body.storage1) {
    res.status(400);
    throw new Error("Must set a password.");
  } if (!req.body.cpuCooler) {
    res.status(400);
    throw new Error("Must set a password.");
  }

  const buildPc = await BuildPc.create({
    cpu: req.body.cpu,
    motherboard: req.body.motherboard,
    memory: req.body.memory,
    videoCard: req.body.videoCard,
    case: req.body.case,
    powerSupply: req.body.powerSupply,
    storage1: req.body.storage1,
    storage2: req.body.storage2,
    cpuCooler: req.body.cpuCooler,
    OperatingSystem: req.body.OperatingSystem,
    
  });

  res.status(200).json(buildPc);
};

// Update 
// route PUT 
const updateBuildPc = async (req, res) => {
  const buildPc = await BuildPc.findById(req.params.id);

  if (!buildPc) {
    res.status(400);
    throw new Error("buildPc not found");
  }

  const updatedBuildPc = await BuildPc.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedBuildPc);
};

// Delete 
// route DELETE 
const deleteBuildPc = async (req, res) => {
  const buildPc = await BuildPc.findById(req.params.id);

  if (!buildPc) {
    res.status(400);
    throw new Error("BuildPc not found");
  }

  await buildPc.remove();

  res.status(200).json({ _id: req.params.id });
};

module.exports = {
  getBuildPc,
  setBuildPc,
  updateBuildPc,
  deleteBuildPc,
};
