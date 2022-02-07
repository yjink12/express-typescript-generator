import cookieParser from 'cookie-parser';
//import morgan from 'morgan';
import path from 'path';
//import helmet from 'helmet';

import express, {Request, Response } from 'express';
import StatusCodes from 'http-status-codes';
import 'express-async-errors';

//import apiRouter from './routes/api';
import router from '../src/routes';
import logger from 'jet-logger';

// Constants
//const app = express();
const { BAD_REQUEST } = StatusCodes;

// Show routes called in console during development
// if (process.env.NODE_ENV === 'development') {
//     app.use(morgan('dev'));
// }

// // Security (helmet recommended in express docs)
// if (process.env.NODE_ENV === 'production') {
//     app.use(helmet());
// }

class Server {
    private app: express.Application;

    private readonly viewDir = path.join(__dirname, 'views');
    private readonly staticDir = path.join(__dirname, 'public');

    constructor(){
        this.app = express();
        
        this.initMiddlewares();
        this.initRoutes();
        this.initDir();
        this.initError();
    }
    
    private initRoutes(){
        router(this.app);
    }

    private initMiddlewares(){
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(cookieParser());
    }

    private initDir(){
        this.app.set('view engine', 'ejs');
        this.app.set('views', this.viewDir);
        this.app.use(express.static(this.staticDir));
    }

    private initError(){
        this.app.use((err: Error, req: Request, res: Response) => {
            logger.err(err, true);
            return res.status(BAD_REQUEST).json({
                error: err.message,
            });
        });
    }

    public getInstance(){
        return this.app;
    }
}

export default Server;

