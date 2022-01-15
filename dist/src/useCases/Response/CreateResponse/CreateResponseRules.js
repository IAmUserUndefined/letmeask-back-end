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
Object.defineProperty(exports, "__esModule", { value: true });
const ResponseRepository_1 = require("../../../repositories/Response/ResponseRepository/ResponseRepository");
const errors_1 = require("../../../utils/errors");
class CreateResponseRules {
    constructor() {
        this.repository = new ResponseRepository_1.ResponseRepository();
    }
    execute({ response, questionId }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!response)
                return new errors_1.MissingParamError("Preencha o nome da resposta");
            yield this.repository.store(questionId, response);
            return "Resposta enviada com sucesso";
        });
    }
}
exports.default = CreateResponseRules;
