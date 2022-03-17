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
const UserRepository_1 = require("../../../repositories/User/UserRepository/UserRepository");
const Cache_1 = __importDefault(require("../../../providers/Cache/Cache"));
class GetUsernameRules {
    constructor() {
        this.repository = new UserRepository_1.UserRepository;
    }
    execute({ userId }) {
        return __awaiter(this, void 0, void 0, function* () {
            const name = Cache_1.default.get(`username-${userId}`);
            if (name === undefined) {
                const repositoryName = yield this.repository.getName(userId);
                Cache_1.default.set(`username-${userId}`, repositoryName, 3600 // 1 hours
                );
                return repositoryName;
            }
            return name;
        });
    }
}
exports.default = GetUsernameRules;
