const express = require('express');
const router = express.Router();

const {
    getTickets,
    publishTicket,
    updateTicket,
    deleteTicket
} = require('../controllers/admin_controllers');

router.route("/tickets").get(getTickets).post(publishTicket);
router.route("/tickets/:id").put(updateTicket).delete(deleteTicket);

module.exports = router;