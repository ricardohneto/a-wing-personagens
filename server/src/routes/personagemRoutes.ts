import { Router } from 'express';
import { personagemController } from '../controllers/personagemController';



class PersonagemRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', personagemController.list);
        this.router.get('/:id', personagemController.getOne);
        this.router.post('/', personagemController.create);
        this.router.put('/:id', personagemController.update);
        this.router.delete('/:id', personagemController.delete);
    }

}

const personagemRoutes = new PersonagemRoutes();
export default personagemRoutes.router;