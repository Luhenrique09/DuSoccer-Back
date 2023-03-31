"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersPost = void 0;
const users_service_1 = __importDefault(require("../service/users-service"));
async function usersPost(req, res) {
    const { name, email, password } = req.body;
    try {
        const user = await users_service_1.default.createUser({ name, email, password });
        return res.status(201).json({
            id: user.id,
            email: user.email,
        });
    }
    catch (e) {
        return res.status(400).send(e);
    }
}
exports.usersPost = usersPost;
//# sourceMappingURL=users-controller.js.map