const mongoose = require('mongoose');
const bodyParser = require('body-parser');


var express = require('express')
var morgan = require('morgan')
 
var app = express()
 
app.use(morgan('dev'))
// parse application/x-www-form-urlencoded
app.use(
    bodyParser.urlencoded({ 
        extended: false
    })
);

var exphbs  = require('express-handlebars');
app.engine(
    'handlebars', exphbs({
        defaultLayout: "main"
    })
);
app.set(
    'view engine', 'handlebars'
);
 
var port = process.env.Port || 8080;
app.listen(port, function() {
    console.log("Listening on PORT " + port)
}
);