"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRouters_1 = __importDefault(require("./userRouters"));
const roomRouters_1 = __importDefault(require("./roomRouters"));
const questionRouters_1 = __importDefault(require("./questionRouters"));
const responseRouters_1 = __importDefault(require("./responseRouters"));
const testRouters_1 = __importDefault(require("./testRouters"));
const router = (0, express_1.Router)();
router.use(userRouters_1.default);
router.use(roomRouters_1.default);
router.use(questionRouters_1.default);
router.use(responseRouters_1.default);
router.use(testRouters_1.default);
exports.default = router;
