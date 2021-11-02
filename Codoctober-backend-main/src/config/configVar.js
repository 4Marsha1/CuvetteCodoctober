const dotenv =require("dotenv");
dotenv.config();

const MONGO_SETUP_OPTIONS = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    // useFindAndModify: false,
    socketTimeoutMS: 30000,
    keepAlive: true,
    // poolSize: 50,
    autoIndex: false,
    retryWrites: false
};

const MONGO_USERNAME = process.env.MONGO_USERNAME || 'adminUserName';
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || 'adminUserPassword';
const MONGO_HOST = process.env.MONG_URL || 'http://localhost:27017';
const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || 8080;

const MONGO = {
    host: MONGO_HOST,
    password: MONGO_PASSWORD,
    username: MONGO_USERNAME,
    options: MONGO_SETUP_OPTIONS,
    url: `${SERVER_HOSTNAME}://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}`
};


const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
};

const config = {
    mongo: MONGO,
    server: SERVER
};

module.exports={config,SERVER_PORT};

//Cuvette 
//6OTlbhbIiYUQY7se