// src/index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3009;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// home Route
app.get('/', (req, res) => {
  res.send('Welcome to the ChainNode Blockchain Interface! You can access now');
});

// Starting the Server
app.listen(port, () => {
  console.log(`starchain is listening at http://localhost:${port}.`);
});
