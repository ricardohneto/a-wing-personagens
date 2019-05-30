"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class PersonagemController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const personagens = yield database_1.default.query('SELECT * FROM personagem');
            res.json(personagens);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const personagem = yield database_1.default.query('SELECT * FROM personagem WHERE cod_personagem = ?', [id]);
            if (personagem.length > 0) {
                return res.json(personagem[0]);
            }
            res.status(404).json({ text: "Personagem não existe" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO personagem set ?', [req.body]);
            res.json({ message: 'Personagem criado com sucesso !!!' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE personagem set ? WHERE cod_personagem = ?', [req.body, id]);
            res.json({ message: 'Jogo atualizado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM personagem WHERE cod_personagem = ?', [id]);
            res.json({ message: 'Jogo excluido com sucesso !!!' });
        });
    }
}
exports.personagemController = new PersonagemController();
