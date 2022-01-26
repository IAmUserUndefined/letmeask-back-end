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
exports.QuestionRepository = void 0;
const index_1 = __importDefault(require("../../../../prisma/index"));
class QuestionRepository {
    store(id, userId, roomCode, name) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield index_1.default.question.create({
                    data: {
                        id: id,
                        userId: userId,
                        roomCode: roomCode,
                        name: name
                    }
                });
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    getQuestions(roomCode) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const questions = yield index_1.default.question.findMany({
                    where: {
                        roomCode: roomCode
                    }
                });
                return questions;
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    getUserQuestions(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const questions = yield index_1.default.question.findMany({
                    where: {
                        userId: userId
                    }
                });
                return questions;
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    destroy(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield index_1.default.question.delete({
                    where: {
                        id: id
                    }
                });
            }
            catch (e) {
                console.log(e);
            }
        });
    }
}
exports.QuestionRepository = QuestionRepository;
