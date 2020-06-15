"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const URL = 'http://localhost:8080/';
exports.default = axios_1.default.create({
    baseURL: URL,
    headers: {
        'Content-Type': 'application/json'
    }
});
//# sourceMappingURL=http-common.js.map