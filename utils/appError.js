// Extension for error file to set data to send response
class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.message = message
        this.statusCode = statusCode;
        this.staus = `${statusCode}`.startsWith("4") ? "fail" : "error";
        this.isOperation = true;

        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = AppError;
