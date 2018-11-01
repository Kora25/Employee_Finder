const path = require("path");
// 3. Your `htmlRoutes.js` file should include two routes:

// * A GET Route to `/survey` which should display the survey page.
// * A default, catch-all route that leads to `home.html` which displays the home page. 

// ROUTES
//let waitingList = require('../data/waiting-list.js');

module.exports = function (app) {
  app.get('/home', function (request, response) {
    response.sendFile(path.join(__dirname, '../public/home.html'));
  });

  app.get('/survey', function (request, response) {
    response.sendFile(path.join(__dirname, '../public/survey.html'));
  });

  // If no matching route is found default to home
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/home.html'));
  });

}     