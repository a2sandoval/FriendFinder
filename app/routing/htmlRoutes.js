//dependencies
var path = require("path");

//routes and get hmtl to view the pages
module.exports = function(app) {
    
    //go to home 
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
      });
    //got to survey
    app.get("/survey", function(req, res){
      res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

};