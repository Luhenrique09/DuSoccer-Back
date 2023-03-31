"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_repository_1 = __importDefault(require("../repositories/user-repository"));
async function createUser({ name, email, password }) {
    await validateEmail(email);
    const hashedPassword = await bcrypt_1.default.hash(password, 12);
    const user = {
        name,
        email,
        password: hashedPassword
    };
    const createdUser = await user_repository_1.default.createUser(user);
    return createdUser;
}
async function validateEmail(email) {
    const userEmail = await user_repository_1.default.findByEmail(email);
    if (userEmail) {
        throw { name: "CONFLICT" };
    }
}
const userService = {
    createUser,
};
exports.default = userService;
//# sourceMappingURL=users-service.js.map