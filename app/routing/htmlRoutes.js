
// 3. Your `htmlRoutes.js` file should include two routes:
// * A GET Route to `/survey` which should display the survey page.
// * A default, catch-all route that leads to `home.html` which displays the home page. 

// ===============================================================================

// DEPENDENCIES
// We need to include the path package to get the correct file path for our html

const path = require("path");


// ROUTES

module.exports = function (app) {
  // HTML GET Requests
  // Below code handles when users 'visit' a page.
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