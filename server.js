
// 2. Your `server.js` file should require the basic npm packages we've used in class: `express` and `path`.

// Imports express into our app and sets it up for use
const express = require('express');
const path = require("path");


const app = express();


// Defines a PORT for the server to listen for requests
// Normal post is 8080, but I am not able to use that port on my PC

// const PORT = 9080;

var PORT = process.env.PORT || 9090;

// Sets up our server to parse our request body for usage
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets our server to use the public directory for static assets
app.use(express.static(path.join(__dirname, "/app/public")));

// Routes
// -----------------
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);


// Starts our server on the predefined PORT
app.listen(PORT, function(){
  console.log(`App is now listening on PORT ${PORT}`)
})



