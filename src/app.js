const express = require('express');

const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'online',
    service: 'Auth Cloud API',
    version: '1.0.0'
  });
});

module.exports = app;