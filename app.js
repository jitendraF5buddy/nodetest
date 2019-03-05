'use strict';
var cors = require('cors')

const express = require('express');
var bodyParser = require('body-parser');
//const middleware = require('./middleware.js');

const app = express();

app.use(cors())
//app.use(middleware.overrideContentType);
app.use(bodyParser.json({
  limit:'4mb', extended: true
}));

app.get('/', (req, res) => {
  res
    .status(404)
    .send('Not Found')
    .end();
});


app.use('/auth',        require('./auth.js'));


// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});