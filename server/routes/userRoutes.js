const express = require("express");
const router = express.Router();
const {
  getUser,
  setUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

router.get("/", getUser);
router.post("/", setUser);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);

module.exports = router;
