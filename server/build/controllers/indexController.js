"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.send('Bem-vindo a este super website... Va para localhost:3000/personagem para uma incrivel experiencia geik');
    }
}
exports.indexController = new IndexController();
