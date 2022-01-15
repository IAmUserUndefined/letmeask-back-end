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
const adapterResponses_1 = require("../../../adapter/adapterResponses/adapterResponses");
const DeleteUserRules_1 = __importDefault(require("./DeleteUserRules"));
exports.default = new class DeleteUserController {
    handle(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = request.userId;
            const { password, passwordConfirm } = request.body;
            const deleteUserController = new DeleteUserRules_1.default();
            const response = yield deleteUserController.execute({ id, password, passwordConfirm });
            return (0, adapterResponses_1.ok)(response);
        });
    }
};
