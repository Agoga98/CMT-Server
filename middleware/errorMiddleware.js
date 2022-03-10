//All Middleware are functions that execute during the request-response-cycle. So when you make a request

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500 //if a status code is already set, we will use it else the statusCode vaule will be set to 500

    res.status(statusCode)

    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack //if we are in development-mode, the error-stack will also be send over the response
    })
}

module.exports = {
    errorHandler
}