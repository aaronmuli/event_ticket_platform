const express = require('express');
require('dotenv').config();

const port = process.env.PORT || 5000

const app = express()

app.use('/admin', require('./routes/admin_routes'));

app.listen(port, () => {
    console.log(`server started on port ${port}`);
});

// endpoints
// admin first
// 1. POST /tickets - add a ticket
// 2. GET /tickets - get all available tickets
// 3. PUT /tickets/id - update the ticket with id
// 4. DELETE /tickets/id - delete the ticket with id

// client
// 1. GET /tickets - get all available tickets
// 2. POST /tickets/purchase/id - purchase the ticket with id
