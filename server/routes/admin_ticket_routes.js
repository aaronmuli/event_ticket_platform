const express = require('express');
const router = express.Router();

const { 
    createTicket,
    removeTicket,
    updateTicket,
    getTickets,
 } = require('../controllers/admin_ticket_controllers');

// admin routes
router.route('/').get(getTickets).post(createTicket);
router.route('/:id').delete(removeTicket).put(updateTicket);

module.exports = router;