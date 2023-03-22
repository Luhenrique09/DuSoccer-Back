"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const users_repository_1 = __importDefault(require("../repositories/users-repository"));
async function createUser({ name, email, password }) {
    const hashedPassword = await bcrypt_1.default.hash(password, 12);
    const user = {
        name,
        email,
        password: hashedPassword
    };
    const createdUser = await users_repository_1.default.createUser(user);
    return createdUser;
}
exports.createUser = createUser;
async function validateUniqueEmailOrFail(email) {
    const userWithSameEmail = await users_repository_1.default.findByEmail(email);
    if (userWithSameEmail) {
        throw { name: "CONFLICT" };
    }
}
const userService = {
    createUser,
};
exports.default = userService;
//# sourceMappingURL=users-service.js.map