"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
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
const RoomRepository_1 = require("../repositories/Room/RoomRepository/RoomRepository");
const index_1 = require("../utils/errors/index");
const Helper_1 = __importDefault(require("../utils/helper/Helper"));
exports.default = (request) => __awaiter(void 0, void 0, void 0, function* () {
    const { authorization } = request.headers;
    const [, token] = authorization.split(" ");
    const decode = Helper_1.default.jwtVerify(token);
    const roomRepository = new RoomRepository_1.RoomRepository();
    const room = yield roomRepository.getUserRoomCode(decode.id);
    const { roomCode } = request.params;
    if (room !== roomCode)
        return new index_1.UnauthorizedError("Só o administrador da sala pode fazer essa ação");
});
