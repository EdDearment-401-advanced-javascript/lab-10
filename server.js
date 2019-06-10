'use strict';

require('dotenv').config();

// Application Dependencies
const express = require('express');
const pg = require('pg');
const superagent = require('superagent');

// Application Setup
const app = express();
const PORT = process.env.PORT;



// Application Middleware
app.use(require('./middleware/expreUrl.js'));
app.use(require('./middleware/expreStatic.js'));
app.use(require('./middleware/override.js'));

// Set the view engine for server-side templating
app.set('view engine', 'ejs');



module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => consolelog(`Listening: ${PORT}`));
  }
};
