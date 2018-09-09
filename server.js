//Dependencies

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//config for Express. 

var app = express();

//create the PORT for our server
var PORT = process.env.PORT || 8080;


// lets the app access the files like CSS and Images
app.use(express.static(path.join(__dirname,'./app/public')));
//data parsing with Express using the bodyParser module
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//routing to files that our app will be using
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

//listen for the port and start the server
app.listen(PORT,function(){
    console.log('listening on port:' + PORT);
    console.log('view app on http://localhost:'+ PORT);
});