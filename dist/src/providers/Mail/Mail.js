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
const path_1 = __importDefault(require("path"));
const Helper_1 = __importDefault(require("../../utils/helper/Helper"));
const nodemailer_express_handlebars_1 = __importDefault(require("nodemailer-express-handlebars"));
const nodemailer_1 = __importDefault(require("nodemailer"));
class Mail {
    constructor() {
        this.mail = nodemailer_1.default.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: { user: Helper_1.default.getEmailEnvironmentVariable(), pass: Helper_1.default.getEmailPasswordEnvironmentVariable() }
        });
        this.mail.use("compile", (0, nodemailer_express_handlebars_1.default)({
            viewEngine: {
                defaultLayout: null,
                partialsDir: path_1.default.resolve("./src/resources/emailBody/")
            },
            viewPath: path_1.default.resolve("./src/utils/emailBody/"),
            extName: ".html"
        }));
    }
    sendMail(to, subject, template, context) {
        return __awaiter(this, void 0, void 0, function* () {
            const email = {
                from: "Minhas Despesas",
                to: to,
                subject: subject,
                template: template,
                context: context
            };
            yield this.mail.sendMail(email);
        });
    }
}
exports.default = Mail;
