const ErrorHandler = require('../utils/errorhandler');

module.exports = (err, req, res, next) => {
    console.log(err.stack);

    // Wrong Mongodb Id error
    if (err.name === 'CastError') {
        const message = `Resource not found. Invalid: ${err.path}`;
        err = new ErrorHandler(message, 400);
    }

    res.status(500).json({
        success: false,
        message: err.message || 'Internal Server Error',
    });
};
