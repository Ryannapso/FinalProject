const express = require("express");
const router = express.Router();
const {
  getBuildPc,
  setBuildPc,
  updateBuildPc,
  deleteBuildPc,
} = require("../controllers/buildPcController");

router.get("/", getBuildPc);
router.post("/", setBuildPc);
router.delete("/:id",deleteBuildPc);
router.put("/:id", updateBuildPc);

module.exports = router;
