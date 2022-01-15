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
const RoomRepository_1 = require("../../../repositories/Room/RoomRepository/RoomRepository");
const errors_1 = require("../../../utils/errors");
const Helper_1 = __importDefault(require("../../../utils/helper/Helper"));
class CreateRoomRules {
    constructor() {
        this.repository = new RoomRepository_1.RoomRepository();
    }
    execute({ userId, name }) {
        return __awaiter(this, void 0, void 0, function* () {
            const codeRoom = yield this.repository.getUserRoomCode(userId);
            if (codeRoom)
                return new errors_1.UnauthorizedError("Você já tem uma sala criada, exclua ela para criar outra");
            if (!name)
                return new errors_1.MissingParamError("Preencha o nome da sala");
            const code = `${Math.floor(Math.random() * 100000)}`;
            yield this.repository.store(Helper_1.default.createId(), userId, code, name);
            return code;
        });
    }
}
exports.default = CreateRoomRules;
