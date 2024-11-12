const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

//database connection
require('./database');

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//routers
const indexRoutes = require('./routes/index.routes');

//routes
app.use('/', indexRoutes);


//launch server
app.listen(3000);
console.log('Server on port', 3000);
