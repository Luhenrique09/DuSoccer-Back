"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const session_repository_1 = __importDefault(require("../../repositories/session-repository"));
const user_repository_1 = __importDefault(require("../../repositories/user-repository"));
async function signIn(params) {
    const { email, password } = params;
    const user = await getUserOrFail(email);
    await validatePasswordOrFail(password, user.password);
    const token = await createSession(user.id);
    return {
        user: user,
        token,
    };
}
async function getUserOrFail(email) {
    const user = await user_repository_1.default.findByEmail(email);
    if (!user)
        throw { name: "erro" };
    return user;
}
async function createSession(userId) {
    const token = jsonwebtoken_1.default.sign({ userId }, process.env.JWT_SECRET || "ufh4745nfg8858u4ne883y3ber8");
    await session_repository_1.default.create({
        token,
        userId,
    });
    return token;
}
async function validatePasswordOrFail(password, userPassword) {
    const isPasswordValid = await bcrypt_1.default.compare(password, userPassword);
    if (!isPasswordValid)
        throw { name: "erro" };
}
const authenticationService = {
    signIn,
};
exports.default = authenticationService;
//# sourceMappingURL=index.js.map