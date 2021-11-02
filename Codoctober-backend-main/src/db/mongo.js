const mongoose = require('mongoose');
const {config }= require('../config/configVar');
const CONST = require('../config/const');
const logger = require('../config/logger');
const { NAMESPACE } = CONST;

module.exports=function connection() {
    return mongoose
        .connect(config.mongo.url, config.mongo.options)
        .then((result) => {
            logger.info(NAMESPACE, 'Mongo Connected');
        })
        .catch((error) => {
            logger.error(NAMESPACE, error.message, error);
        });
}


