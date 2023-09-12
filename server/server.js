const express = require('express');
const formData = require('express-form-data');
const bodyParser = require('body-parser');

const port = 5000;

const app = express();

app.use(formData.parse());
app.use(bodyParser.urlencoded({extended: true}))


app.use('/admin/tickets', require('./routes/admin_ticket_routes'));

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});