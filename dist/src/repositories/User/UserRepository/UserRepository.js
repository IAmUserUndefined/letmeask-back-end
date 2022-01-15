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
exports.UserRepository = void 0;
const prisma_1 = __importDefault(require("../../../../prisma"));
class UserRepository {
    store(id, email, name, hash, token) {
        return __awaiter(this, void 0, void 0, function* () {
            yield prisma_1.default.user.create({
                data: {
                    id: id,
                    email: email,
                    name: name,
                    password: hash,
                    verificationToken: token
                }
            });
        });
    }
    verifyEmail(email, token) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield prisma_1.default.user.findMany({
                where: {
                    AND: [
                        { email: { equals: email } },
                        { verificationToken: { equals: token }
                        },
                    ],
                },
            });
            yield prisma_1.default.user.update({
                where: {
                    id: user[0].id
                },
                data: {
                    verifiedEmail: true
                }
            });
        });
    }
    getName(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name } = yield prisma_1.default.user.findUnique({
                where: {
                    id: id
                }
            });
            return name;
        });
    }
    updateName(id, name) {
        return __awaiter(this, void 0, void 0, function* () {
            yield prisma_1.default.user.update({
                where: {
                    id: id
                },
                data: {
                    name: name
                }
            });
        });
    }
    destroy(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield prisma_1.default.user.delete({
                where: {
                    id: id
                }
            });
        });
    }
    findEmailById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield prisma_1.default.user.findUnique({
                where: {
                    id: id
                }
            });
            return user.email;
        });
    }
    findEmailByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield prisma_1.default.user.findUnique({
                where: {
                    email: email
                }
            });
            const userEmail = user ? user.email : null;
            return userEmail;
        });
    }
    findByEmailVerified(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield prisma_1.default.user.findMany({
                where: {
                    AND: [
                        { email: { equals: email } },
                        { verifiedEmail: { equals: true }
                        },
                    ],
                },
            });
            const userEmail = user[0] ? user[0].email : null;
            return userEmail;
        });
    }
    getId(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield prisma_1.default.user.findUnique({
                where: {
                    email: email
                }
            });
            return user.id;
        });
    }
    getPasswordByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield prisma_1.default.user.findUnique({
                where: {
                    email: email
                }
            });
            return user.password;
        });
    }
    getPasswordById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield prisma_1.default.user.findUnique({
                where: {
                    id: id
                }
            });
            return user.password;
        });
    }
    getVerificationTokenById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield prisma_1.default.user.findUnique({
                where: {
                    id: id
                }
            });
            return user.verificationToken;
        });
    }
    getVerificationTokenByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield prisma_1.default.user.findUnique({
                where: {
                    email: email
                }
            });
            return user.verificationToken;
        });
    }
    updateVerificationTokenById(id, verificationToken) {
        return __awaiter(this, void 0, void 0, function* () {
            yield prisma_1.default.user.update({
                where: {
                    id: id
                },
                data: {
                    verificationToken: verificationToken
                }
            });
        });
    }
    updateVerificationTokenByEmail(email, verificationToken) {
        return __awaiter(this, void 0, void 0, function* () {
            yield prisma_1.default.user.update({
                where: {
                    email: email
                },
                data: {
                    verificationToken: verificationToken
                }
            });
        });
    }
    getVerificationTokenExpiryDateById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield prisma_1.default.user.findUnique({
                where: {
                    id: id
                }
            });
            return user.verificationTokenExpiryTime;
        });
    }
    getVerificationTokenExpiryDateByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield prisma_1.default.user.findUnique({
                where: {
                    email: email
                }
            });
            return user.verificationTokenExpiryTime;
        });
    }
    updateVerificationTokenExpiryDateById(id, verificationTokenExpiryDate) {
        return __awaiter(this, void 0, void 0, function* () {
            yield prisma_1.default.user.update({
                where: {
                    id: id
                },
                data: {
                    verificationTokenExpiryTime: verificationTokenExpiryDate
                }
            });
        });
    }
    updateVerificationTokenExpiryDateByEmail(email, verificationTokenExpiryDate) {
        return __awaiter(this, void 0, void 0, function* () {
            yield prisma_1.default.user.update({
                where: {
                    email: email
                },
                data: {
                    verificationTokenExpiryTime: verificationTokenExpiryDate
                }
            });
        });
    }
    updateEmail(id, email) {
        return __awaiter(this, void 0, void 0, function* () {
            yield prisma_1.default.user.update({
                where: {
                    id: id
                },
                data: {
                    email: email
                }
            });
        });
    }
    updatePasswordById(id, password) {
        return __awaiter(this, void 0, void 0, function* () {
            yield prisma_1.default.user.update({
                where: {
                    id: id
                },
                data: {
                    password: password
                }
            });
        });
    }
    updatePasswordByEmail(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            yield prisma_1.default.user.update({
                where: {
                    email: email
                },
                data: {
                    password: password
                }
            });
        });
    }
}
exports.UserRepository = UserRepository;
