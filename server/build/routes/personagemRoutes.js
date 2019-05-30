"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const personagemController_1 = require("../controllers/personagemController");
class PersonagemRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', personagemController_1.personagemController.list);
        this.router.get('/:id', personagemController_1.personagemController.getOne);
        this.router.post('/', personagemController_1.personagemController.create);
        this.router.put('/:id', personagemController_1.personagemController.update);
        this.router.delete('/:id', personagemController_1.personagemController.delete);
    }
}
const personagemRoutes = new PersonagemRoutes();
exports.default = personagemRoutes.router;
