const express = require('express');

const app = express();

const authRoutes = require('./routes/authRoutes');

app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'online',
    service: 'Auth Cloud API',
    version: '1.0.0'
  });
});

app.use('/auth', authRoutes);

module.exports = app;