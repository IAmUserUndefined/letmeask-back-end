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
exports.RoomRepository = void 0;
const index_1 = __importDefault(require("../../../../prisma/index"));
class RoomRepository {
    store(id, userId, code, name) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield index_1.default.room.create({
                    data: {
                        id: id,
                        userId: userId,
                        code: code,
                        name: name
                    }
                });
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    getUserRoomCode(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const room = yield index_1.default.room.findUnique({
                    where: {
                        userId: userId
                    }
                });
                const code = room ? room.code : null;
                return code;
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    getRoom(code) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const room = yield index_1.default.room.findMany({
                    where: {
                        code: code
                    },
                });
                const roomId = room.length !== 0 ? room[0].id : "";
                return yield index_1.default.room.findUnique({
                    where: {
                        id: roomId
                    }
                });
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    destroy(code) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield index_1.default.room.delete({
                    where: {
                        code: code
                    }
                });
            }
            catch (e) {
                console.log(e);
            }
        });
    }
}
exports.RoomRepository = RoomRepository;
