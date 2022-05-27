const Ticket = require('../models/ticketModel');
const Customer = require('../models/customerModel');
const User = require('../models/userModel');

// Get tickets
// route GET /tickets
const getTicket = async (req, res) => {
  const tickets = await Ticket.find();

  res.status(200).json(tickets);
};

// Set tickets
// route POST /tickets
const setTicket = async (req, res) => {
  if(!req.body.deviceType) {
    res.status(400)
    throw new Error('Please add a device type.');
  }

  // if(!req.body.description) {
  //   res.status(400)
  //   throw new Error('Please add a description.');
  // }

  if(!req.body.customer) {
    res.status(400)
    throw new Error('ticket has to be linked to a customer.');
  }

  if(!req.body.technician) {
    res.status(400)
    throw new Error('ticket has to be linked to a technician.');
  }

  if(!req.body.status) {
    res.status(400)
    throw new Error('please add status.');
  }

  const ticket = await Ticket.create({
    deviceType: req.body.deviceType,
    problem: req.body.problem,
    customer: req.body.customer,
    technician: req.body.technician,
    status: req.body.status,
    cost: req.body.cost
  });

  res.status(200).json(ticket);
};

// Update tickets
// route PUT /tickets/:id
const updateTicket = async (req, res) => {
  const ticket = await Ticket.findById(req.params.id);

  if(!ticket) {
    res.status(400);
    throw new Error('ticket not found');
  }

  const updatedTicket = await Ticket.findByIdAndUpdate(req.params.id, req.body,{new: true,});
  res.status(200).json(updatedTicket);
};

// Delete tickets
// route DELETE /tickets/:id
const deleteTicket = async (req, res) => {
  const ticket = await Ticket.findById(req.params.id);

  if(!ticket) {
    res.status(400);
    throw new Error('Ticket not found');
  }

  await ticket.remove();

  res.status(200).json({ _id: req.params.id });
};

module.exports = {
  getTicket,
  setTicket,
  updateTicket,
  deleteTicket
};
