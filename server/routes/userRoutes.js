const express = require("express");
const router = express.Router();
const {
  getUser,
  setUser,
  updateUser,
  deleteUser,
  registerUser,
  loginUser,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

router.delete("/:id", deleteUser);
router.put("/:id", updateUser);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get('/user',protect, getUser);

module.exports = router;
