
function errorHandler(err, req, res, next) {
  console.error('Error capturado por middleware:', err.message);

  // Error de validación de Sequelize
  if (err.name === 'SequelizeValidationError') {
    return res.status(400).json({
      error: 'Validation error',
      details: err.errors.map((e) => e.message),
    });
  }

  // error conection database
  if (err.name && err.name.startsWith('Sequelize')) {
    return res.status(500).json({
      error: 'Database error',
      details: err.message,
    });
  }

  // cualquier eror
  res.status(err.status || 500).json({
    error: err.message || 'Internal Server Error',
  });
}

module.exports = errorHandler;
