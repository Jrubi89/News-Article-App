const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var express = require('express')
var morgan = require('morgan')
var exphbs  = require('express-handlebars')


var app = express()
 
app.use(morgan('dev'))
// parse application/x-www-form-urlencoded
app.use(
    bodyParser.urlencoded({ 
        extended: false
    })
);

app.use(express.static(process.cwd() + "/public")
);


app.engine(
    'handlebars', exphbs({
        defaultLayout: "main"
    })
);
app.set(
    'view engine', 'handlebars'
);


mongoose.connect("mongodb://localhost/scraped_news")
var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"))
db.once('open', function(){
    console.log("Connected to Mongoose!")
}
);



var port = process.env.Port || 5000;
app.listen(port, function() {
    console.log("Listening on PORT " + port)
}
);