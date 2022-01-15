"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const QuestionRepository_1 = require("../../../repositories/Question/QuestionRepository/QuestionRepository");
const errors_1 = require("../../../utils/errors");
const Helper_1 = __importDefault(require("../../../utils/helper/Helper"));
class CreateQuestionRules {
    constructor() {
        this.repository = new QuestionRepository_1.QuestionRepository();
    }
    execute({ question, userId, roomCode }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!question)
                return new errors_1.MissingParamError("Preencha o nome da questão");
            yield this.repository.store(Helper_1.default.createId(), userId, roomCode, question);
            return "Pergunta criada com sucesso";
        });
    }
}
exports.default = CreateQuestionRules;
