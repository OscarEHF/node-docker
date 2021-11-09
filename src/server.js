const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));

// Routes

// Intentional error
app.use('/error-msg', (req, res) => {
  res.render('errrrrrrrrr');
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Error 404: Not found!' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Error 500: Internal Server Error' });
});

module.exports = app;
