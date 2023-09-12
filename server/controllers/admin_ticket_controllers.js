const asyncHandler = require("express-async-handler");

// @method      GET /tickets/
// @desc        get all tickets
// @access      Private
const getTickets = asyncHandler( async (req, res) => {

    res.status(200).json("get all tickets");
});

// @method      POST /tickets/
// @desc        create ticket
// @access      Private
const createTicket = asyncHandler(async(req, res) => {

    if(
        !req.body.event_title || 
        !req.body.event_price || 
        !req.body.event_venue || 
        !req.body.event_template || 
        !req.body.event_time || 
        !req.body.event_date ||
        !req.body.event_message
    ) {

        res.status(400).json("Enter the missing fields!");
    }
    else {
        res.status(200);
        
        const data = req.body;
        
        res.json(data);

    }

})

// @method      DELETE /tickets/:id
// @desc        delete a ticket
// @access      Private
const removeTicket = (req, res) => {
    res.status(200).json(`remove ticket ${req.params.id}`);
}

// @method      PUT /tickets/:id
// @desc        update a ticket
// @access      Private
const updateTicket = (req, res) => {

    res.status(200).json(`update ticket ${req.params.id}`);
}


module.exports = {
    createTicket,
    removeTicket,
    updateTicket,
    getTickets
};
