// Importing Packages
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dotenv = require('dotenv')
const mongoose = require('mongoose');
const cors = require("cors")
// importing files
const todoRouter = require("./routes/todoRouter.js");
const errorHandler = require('./utils/errorHandler.js');
const AppError = require('./utils/appError.js');

// using packages
dotenv.config()
const app = express();
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors())
// using router files
app.use("/api", todoRouter);

//not found api
app.all("*", (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

// Database connection

mongoose.connect(process.env.MONGOURL)
    .then((con) => console.log("DB connected"))
    .catch((error) => console.log(error))

const port = process.env.PORT || 3000;
// Server listening
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});

//Overall error handler
app.use(errorHandler);