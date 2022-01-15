"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const adapterRouters_1 = __importDefault(require("../adapter/adapterRouters/adapterRouters"));
const adapterMiddlewares_1 = __importDefault(require("../adapter/adapterMiddlewares/adapterMiddlewares"));
const authenticateUser_1 = __importDefault(require("../middlewares/authenticateUser"));
const authenticateAdmin_1 = __importDefault(require("../middlewares/authenticateAdmin"));
const CreateResponseController_1 = __importDefault(require("../useCases/Response/CreateResponse/CreateResponseController"));
const router = (0, express_1.Router)();
router.post("/response/:roomCode/:questionId", (0, adapterMiddlewares_1.default)(authenticateUser_1.default), (0, adapterMiddlewares_1.default)(authenticateAdmin_1.default), (0, adapterRouters_1.default)(CreateResponseController_1.default.handle));
exports.default = router;
