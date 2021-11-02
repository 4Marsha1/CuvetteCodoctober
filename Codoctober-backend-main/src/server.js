const  {app} =require('./api/app') ;
const  http =require('http') ;
const  chalk =require('chalk') ;
const  { SERVER_PORT } =require('./config/configVar') ;
const  connect =require('./db/mongo') ;
const server = http.createServer(app);

server.listen(SERVER_PORT, () => {
    console.info(chalk.bgWhite.black.bold(`Connecting to Server on port ${SERVER_PORT}`));
    console.info(chalk.bgWhite.black.bold(`API RUNNING `));
    connect();
});
