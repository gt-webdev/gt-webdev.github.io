import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import routes from './routes.json'

const app = express();

// Set Express's view engine to ejs. Needed to render HTML head.
app.set('view engine', 'ejs');

// Add handlers for all pages in routes.json
routes.forEach(route => {
  var Page = require('./pages/' + route.page);

  app.get(route.route, function(req, res) {
    res.render('page', {
      title: route.title,
      body: ReactDOMServer.renderToString(<Page />)
    });
  });
});

// Serve the client-side bundle generated by webpack
app.use(express.static('../dist'));

// Serve other public files
app.use(express.static('../public'));

app.listen(3000, function() {
  console.log("Listening on port 3000");
});
