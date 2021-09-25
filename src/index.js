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
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});