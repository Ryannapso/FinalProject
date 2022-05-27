const Customer = require("../models/customerModel");

// Get Customers
// route GET /Customers
const getCustomer = async (req, res) => {
  const Customers = await Customer.find();

  res.status(200).json(Customers);
};

// Set Customers
// route POST /Customers
const setCustomer = async (req, res) => {
  if (!req.body.firstName) {
    res.status(400);
    throw new Error("Please add your name.");
  }

  if (!req.body.lastName) {
    res.status(400);
    throw new Error("Please add your last name.");
  }
  if (!req.body.phoneNumber1) {
    res.status(400);
    throw new Error("Please add a Phone Number.");
  }

  const Customer = await Customer.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber1: req.body.phoneNumber1,
    phoneNumber2: req.body.phoneNumber2,
    address: req.body.address,
  });

  res.status(200).json(Customer);
};

// Update Customers
// route PUT /Customers/:id
const updateCustomer = async (req, res) => {
  const Customer = await Customer.findById(req.params.id);

  if (!Customer) {
    res.status(400);
    throw new Error("Customer not found");
  }

  const updatedCustomer = await Customer.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedCustomer);
};

// Delete Customers
// route DELETE /Customers/:id
const deleteCustomer = async (req, res) => {
  const Customer = await Customer.findById(req.params.id);

  if (!Customer) {
    res.status(400);
    throw new Error("Customer not found");
  }

  await Customer.remove();

  res.status(200).json({ _id: req.params.id });
};

module.exports = {
  getCustomer,
  setCustomer,
  updateCustomer,
  deleteCustomer,
};
