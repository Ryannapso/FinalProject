const Message = require('../models/messageModel');

// Get messages
// route GET /messages
const getMessage = async (req, res) => {
  const messages = await Message.find();

  res.status(200).json(messages);
};

// Set messages
// route POST /messages
const setMessage = async (req, res) => {
  if(!req.body.title) {
    res.status(400)
    throw new Error('Please add a title.');
  }

  if(!req.body.message) {
    res.status(400)
    throw new Error('Please add a message.');
  }

  const message = await Message.create({
    title: req.body.title,
    message: req.body.message,
    priority: req.body.priority
  });

  res.status(200).json(message);
};

// Update messages
// route PUT /messages/:id
const updateMessage = async (req, res) => {
  const message = await Message.findById(req.params.id);

  if(!message) {
    res.status(400);
    throw new Error('Message not found');
  }

  const updatedMessage = await Message.findByIdAndUpdate(req.params.id, req.body,{new: true,}
);
  res.status(200).json(updatedMessage);
};

// Delete messages
// route DELETE /messages/:id
const deleteMessage = async (req, res) => {
  const message = await Message.findById(req.params.id);

  if(!message) {
    res.status(400);
    throw new Error('Message not found');
  }

  await message.remove();

  res.status(200).json({ _id: req.params.id });
};

module.exports = {
  getMessage,
  setMessage,
  updateMessage,
  deleteMessage
};
