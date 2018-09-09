//load the data from the friends.js file
var amigos = require('../data/friends')

//create the routes that our app will be using aka url 
module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
      res.json(amigos);
    });
  
    app.post("/api/friends", function (req, res) {
      console.log(amigos);
      var idealScore;
      var idealMatch;
      var defaultScore = 0;
  
      //loop over friends data and calculate a match
      for (var i = 0; i < amigos.length; i++) {
        for (var x = 0; x < req.body.scores.length; x++) {
          defaultScore += Math.abs(req.body.scores[x] - amigos[i].scores[x]);
          console.log(defaultScore);
        }
  
        if (!idealScore) {
          idealScore = defaultScore;
          console.log(idealScore);
        }
        
        else if (defaultScore < idealScore) {
          idealScore = defaultScore;
          idealMatch = amigos[i];
        }
        // used it to reset app, but it breaks the code otherwise. This is magic as far as im concerned. 
        defaultScore = 0;
      }
  
      res.json(idealMatch);
      amigos.push(req.body);
    });
  }