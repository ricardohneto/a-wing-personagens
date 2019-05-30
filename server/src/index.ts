import express, { Application } from 'express'; 
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import personagemRoutes from './routes/personagemRoutes';

class Personagem {

    public app: Application;

    constructor(){
        this.app = express();
        this.config();
        this.rotas();
    }

    config(): void {
        this.app.set('port' , process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended : false}));
    }

    rotas(): void {
        this.app.use('/', indexRoutes);
        this.app.use('/personagens', personagemRoutes);
    }

    start(): void {
        this.app.listen(this.app.get('port'),() => {
            console.log('Server on Port', this.app.get('port'));
        });
    }

}

const server = new Personagem();
server.start();