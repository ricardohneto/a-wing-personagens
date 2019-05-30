import { Request, Response, response } from 'express';

import db from '../database';

class PersonagemController {

    public async list(req: Request, res: Response) {
        const personagens = await db.query('SELECT * FROM personagem');
        res.json(personagens);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const personagem = await db.query('SELECT * FROM personagem WHERE cod_personagem = ?', [id]);
        if (personagem.length > 0) {
            return res.json(personagem[0]);
        }
        res.status(404).json({text: "Personagem não existe"});
    }

    public async create (req:Request, res:Response): Promise<void> {
        await db.query('INSERT INTO personagem set ?', [req.body]);
        res.json({message: 'Personagem criado com sucesso !!!'});
    }

    public async update (req:Request, res:Response): Promise<void> {
        const { id } = req.params;
        await db.query('UPDATE personagem set ? WHERE cod_personagem = ?', [req.body, id]);
        res.json({message: 'Jogo atualizado'});
    }

    public async delete (req:Request, res:Response): Promise<void> {
        const { id } = req.params;
        await db.query('DELETE FROM personagem WHERE cod_personagem = ?', [id]);
        res.json({message: 'Jogo excluido com sucesso !!!'});
    }

}

export const personagemController = new PersonagemController();