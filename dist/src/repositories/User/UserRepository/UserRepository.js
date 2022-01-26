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
const index_1 = __importDefault(require("../../../../prisma/index"));
class UserRepository {
    store(id, email, name, hash, token) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield index_1.default.user.create({
                    data: {
                        id: id,
                        email: email,
                        name: name,
                        password: hash,
                        verificationToken: token
                    }
                });
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    verifyEmail(email, token) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield index_1.default.user.findMany({
                    where: {
                        AND: [
                            { email: { equals: email } },
                            { verificationToken: { equals: token }
                            },
                        ],
                    },
                });
                yield index_1.default.user.update({
                    where: {
                        id: user[0].id
                    },
                    data: {
                        verifiedEmail: true
                    }
                });
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    getName(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name } = yield index_1.default.user.findUnique({
                    where: {
                        id: id
                    }
                });
                return name;
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    updateName(id, name) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield index_1.default.user.update({
                    where: {
                        id: id
                    },
                    data: {
                        name: name
                    }
                });
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    destroy(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield index_1.default.user.delete({
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
    findEmailById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield index_1.default.user.findUnique({
                    where: {
                        id: id
                    }
                });
                return user.email;
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    findEmailByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield index_1.default.user.findUnique({
                    where: {
                        email: email
                    }
                });
                const userEmail = user ? user.email : null;
                return userEmail;
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    findByEmailVerified(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield index_1.default.user.findMany({
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
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    getId(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield index_1.default.user.findUnique({
                    where: {
                        email: email
                    }
                });
                return user.id;
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    getPasswordByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield index_1.default.user.findUnique({
                    where: {
                        email: email
                    }
                });
                return user.password;
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    getPasswordById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield index_1.default.user.findUnique({
                    where: {
                        id: id
                    }
                });
                return user.password;
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    getVerificationTokenById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield index_1.default.user.findUnique({
                    where: {
                        id: id
                    }
                });
                return user.verificationToken;
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    getVerificationTokenByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield index_1.default.user.findUnique({
                    where: {
                        email: email
                    }
                });
                return user.verificationToken;
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    updateVerificationTokenById(id, verificationToken) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield index_1.default.user.update({
                    where: {
                        id: id
                    },
                    data: {
                        verificationToken: verificationToken
                    }
                });
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    updateVerificationTokenByEmail(email, verificationToken) {
        return __awaiter(this, void 0, void 0, function* () {
            yield index_1.default.user.update({
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
            try {
                const user = yield index_1.default.user.findUnique({
                    where: {
                        id: id
                    }
                });
                return user.verificationTokenExpiryTime;
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    getVerificationTokenExpiryDateByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield index_1.default.user.findUnique({
                    where: {
                        email: email
                    }
                });
                return user.verificationTokenExpiryTime;
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    updateVerificationTokenExpiryDateById(id, verificationTokenExpiryDate) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield index_1.default.user.update({
                    where: {
                        id: id
                    },
                    data: {
                        verificationTokenExpiryTime: verificationTokenExpiryDate
                    }
                });
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    updateVerificationTokenExpiryDateByEmail(email, verificationTokenExpiryDate) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield index_1.default.user.update({
                    where: {
                        email: email
                    },
                    data: {
                        verificationTokenExpiryTime: verificationTokenExpiryDate
                    }
                });
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    updateEmail(id, email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield index_1.default.user.update({
                    where: {
                        id: id
                    },
                    data: {
                        email: email
                    }
                });
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    updatePasswordById(id, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield index_1.default.user.update({
                    where: {
                        id: id
                    },
                    data: {
                        password: password
                    }
                });
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    updatePasswordByEmail(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield index_1.default.user.update({
                    where: {
                        email: email
                    },
                    data: {
                        password: password
                    }
                });
            }
            catch (e) {
                console.log(e);
            }
        });
    }
}
exports.UserRepository = UserRepository;
