import { Request, Response } from 'express';

class IndexController {

    public index(req: Request, res: Response) {
        res.send('Bem-vindo a este super website... Va para localhost:3000/personagem para uma incrivel experiencia geik')
    }

}

export const indexController = new IndexController();