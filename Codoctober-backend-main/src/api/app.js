const  cors =require('cors');
const  express = require('express');
const  morgan = require('morgan');
const  chalk = require('chalk');
// const  helmet = require('helmet');
const   MainRouter  = require('./routes');
const  logger = require('../config/logger');
const  { NAMESPACE } = require('../config/const');
const app= express();

//middlewares
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors({ origin: true, credentials: true }));
// app.use(helmet());
app.use(morgan('dev'));

//  api call log
app.use((req, res, next) => {
    // Log the req
    logger.info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

    // Log the res on finish
    res.on('finish', () => {
        logger.info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - STATUS: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`);
    });

    next();
});


//routes
app.use('/', MainRouter);

//error handler
app.use((error, req, res, next) => {
    console.error(chalk.red(error));
    res.status(error.statusCode || 500).json({
        error: true,
        message: error.message || 'An Error Occured',
        route: req.url,
        name: error.name || 'InteralServerError'
    });
});

module.exports={app};
