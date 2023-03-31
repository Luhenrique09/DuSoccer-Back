"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.singInPost = void 0;
const http_status_1 = __importDefault(require("http-status"));
const authentication_controller_ts_1 = __importDefault(require("../service/authentication-controller.ts"));
async function singInPost(req, res) {
    const { email, password } = req.body;
    try {
        const result = await authentication_controller_ts_1.default.signIn({ email, password });
        const user = {
            id: result.user.id,
            name: result.user.name,
            email: result.user.email,
            token: result.token
        };
        return res.status(http_status_1.default.OK).send(user);
    }
    catch (error) {
        return res.status(http_status_1.default.UNAUTHORIZED);
    }
}
exports.singInPost = singInPost;
//# sourceMappingURL=authentication-controller.js.map