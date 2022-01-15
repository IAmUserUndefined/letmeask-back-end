"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../utils/errors");
const Helper_1 = __importDefault(require("../utils/helper/Helper"));
const cors_1 = __importDefault(require("cors"));
const corsOptions = {
    origin: (origin, callback) => {
        if (Helper_1.default.getAppUrlEnvironmentVariable().indexOf(origin) !== -1)
            return callback(null, true);
        callback(new errors_1.NotAllowedCors("O cors não permite essa requisição"));
    }
};
exports.default = (0, cors_1.default)(corsOptions);
