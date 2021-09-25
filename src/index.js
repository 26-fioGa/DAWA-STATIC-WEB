// Imports
const path = require('path');
const express = require("express");
const app = express();
const morgan = require('morgan');

// Rutas
app.use(require('./routes/index'));

// Archivos Estáticos
app.use('/public', express.static(__dirname + '/public'));

// ---Middlewares---
app.use(morgan('dev'));

// Arranque de servidor
app.listen(3000, () => {
    console.log('Static page Server running on ', 3000);
})