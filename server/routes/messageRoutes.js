const express = require('express');
const router = express.Router();
const { getMessage, setMessage, updateMessage, deleteMessage } = require('../controllers/messageController');

router.get('/', getMessage);
router.post('/', setMessage);
router.delete('/:id', deleteMessage);
router.put('/:id', updateMessage);

module.exports = router;
