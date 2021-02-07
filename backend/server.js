const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');


app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

require('./config/db');

const bookingRouter = require('./routes/booking');
app.use('/', bookingRouter);

const loginRouter = require('./routes/login');
app.use('/', loginRouter);

const port = 8085;
app.listen(port, () => {
    console.log('Server started on http://localhost:' + port);
});