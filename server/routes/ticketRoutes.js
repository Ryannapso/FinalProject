const express = require('express');
const router = express.Router();
const { getTicket, setTicket, updateTicket, deleteTicket } = require('../controllers/ticketController');

router.get('/', getTicket);
router.post('/', setTicket);
router.delete('/:id', deleteTicket);
router.put('/:id', updateTicket);

module.exports = router;
