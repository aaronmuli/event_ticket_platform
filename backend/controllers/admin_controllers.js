
// @desc        Get all tickets
// @route       GET /admin/tickets
// @access      Private
const getTickets = (req, res) => {
    res.status(200);
    res.send("Get all tickets");
};

// @desc        Publish a new ticket
// @route       POST /admin/tickets
// @access      Private
const publishTicket = (req, res) => {
    res.status(200);
    res.send("Publish a ticket");
};

// @desc        Update a ticket with id
// @route       PUT /admin/tickets/:id
// @access      Private
const updateTicket = (req, res) => {
    res.status(200);
    res.send(`Update ticket ${req.params.id}`);
};

// @desc        Delete a ticket with id
// @route       DELETE /admin/tickets/:id
// @access      Private
const deleteTicket = (req, res) => {
    res.status(200);
    res.send(`Delete ticket ${req.params.id}`);
};

module.exports = {
    getTickets,
    publishTicket,
    updateTicket,
    deleteTicket
};