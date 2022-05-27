const express = require("express");
const router = express.Router();
const {
  getCustomer,
  setCustomer,
  updateCustomer,
  deleteCustomer,
} = require("../controllers/customerController");

router.get("/", getCustomer);
router.post("/", setCustomer);
router.delete("/:id", deleteCustomer);
router.put("/:id", updateCustomer);

module.exports = router;
