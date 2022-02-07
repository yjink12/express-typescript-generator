import './pre-start'; // Must be the first import
import logger from 'jet-logger';
import Server from './server';
import sequelize from '../src/config/sequelize';

const server = new Server();
const app = server.getInstance();

// Constants
const serverStartMsg = 'Express server started on port: ',
        port = (process.env.PORT || 3000);

// Start server
app.listen(port, async () => {
    logger.info(serverStartMsg + port);
    console.log('start');
    await sequelize.sync()
    .then(()=>{
        console.log('db connection success');
    })
    .catch((error) => {
        console.log('error: '+ error);
    })
});
