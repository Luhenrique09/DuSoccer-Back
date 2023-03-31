"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../../database/db"));
async function findByEmail(email) {
    return db_1.default.users.findUnique({
        where: {
            email: email
        }
    });
}
async function createUser(data) {
    return db_1.default.users.create({
        data,
    });
}
const userRepository = {
    findByEmail,
    createUser,
};
exports.default = userRepository;
//# sourceMappingURL=index.js.map