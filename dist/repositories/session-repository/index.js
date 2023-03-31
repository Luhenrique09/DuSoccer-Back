"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../../database/db"));
async function create(data) {
    return db_1.default.session.create({
        data,
    });
}
const sessionRepository = {
    create,
};
exports.default = sessionRepository;
//# sourceMappingURL=index.js.map