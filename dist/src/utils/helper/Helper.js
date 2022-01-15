"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const errors_1 = require("../errors");
const uuid_1 = require("uuid");
const bcryptjs_1 = require("bcryptjs");
const crypto_1 = __importDefault(require("crypto"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class Helper {
    static createId() {
        return (0, uuid_1.v4)();
    }
    static createToken() {
        return crypto_1.default.randomBytes(15).toString("hex");
    }
    static encryptPassword(password) {
        return (0, bcryptjs_1.hashSync)(password, 10);
    }
    static compareEncryptPassword(password, userPassword) {
        return (0, bcryptjs_1.compareSync)(password, userPassword);
    }
    static getAppUrlEnvironmentVariable() {
        return process.env.APP_URL;
    }
    static getEmailEnvironmentVariable() {
        return process.env.EMAIL;
    }
    static getEmailPasswordEnvironmentVariable() {
        return process.env.EMAIL_PASSWORD;
    }
    static getSecretKeyJwtEnvironmentVariable() {
        return process.env.SECRET_KEY_JWT;
    }
    static isPasswordValid(password) {
        return {
            result: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?:([0-9a-zA-Z])){8,}$/.test(password),
            message: "Sua senha precisa ter 8 caracteres, uma letra maiúscula, uma minúscula e um número"
        };
    }
    static createJwt(user) {
        return jsonwebtoken_1.default.sign(user, this.getSecretKeyJwtEnvironmentVariable(), { expiresIn: 7200 });
    }
    static jwtVerify(tokenJwt) {
        try {
            const decode = jsonwebtoken_1.default.verify(tokenJwt, this.getSecretKeyJwtEnvironmentVariable());
            return decode;
        }
        catch (_a) {
            return new errors_1.UnauthorizedError("Token Inválido, logue-se novamente");
        }
    }
    static createTokenExpiryDate() {
        return new Date().setMinutes(new Date().getMinutes() + 10);
    }
}
exports.default = Helper;
