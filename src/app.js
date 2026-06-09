const express = require('express');
const swaggerUi = require('swagger-ui-express');

const swaggerSpec = require('./config/swagger');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'online',
    service: 'Auth Cloud API',
    version: '1.0.0'
  });
});

app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
);

app.get('/', (req, res) => {
  res.json({
    message: 'Auth Cloud API',
    status: 'online',
    docs: '/api-docs',
    health: '/health'
  });
});

app.use('/auth', authRoutes);

module.exports = app;