"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersPost = void 0;
const chalk_1 = __importDefault(require("chalk"));
const dayjs_1 = __importDefault(require("dayjs"));
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
    catch (error) {
        console.log(chalk_1.default.redBright((0, dayjs_1.default)().format("YYYY-MM-DD HH:mm:ss"), error));
        return res.status(400).send(error);
    }
}
exports.usersPost = usersPost;
//# sourceMappingURL=users-controller.js.map