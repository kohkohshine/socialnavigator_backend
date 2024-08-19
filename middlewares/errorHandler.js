const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).send({
        message: err.message || "An internal server error occurred",
    });
};

export default errorHandler;