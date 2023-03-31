"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authValidation = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const http_status_1 = __importDefault(require("http-status"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function authValidation(req, res, next) {
    dotenv_1.default.config();
    const { authorization } = req.headers;
    try {
        if (!authorization)
            return res.status(http_status_1.default.UNAUTHORIZED).send("Campo authorization obrigatório");
        const parts = authorization.split(" ");
        const [schema, token] = parts;
        if (parts.length !== 2)
            return res.status(http_status_1.default.BAD_REQUEST).send("Formato campo authorization inválido");
        if (schema !== "Bearer")
            return res.status(http_status_1.default.BAD_REQUEST).send("Bearer inválido");
        const user = jsonwebtoken_1.default.verify(token, process.env.SECRET_JWT = "secret_jwt");
        res.locals.user = user;
    }
    catch (error) {
        if (error instanceof jsonwebtoken_1.default.JsonWebTokenError) {
            return res.status(http_status_1.default.UNAUTHORIZED);
        }
        return res.sendStatus(http_status_1.default.INTERNAL_SERVER_ERROR);
    }
    next();
}
exports.authValidation = authValidation;
//# sourceMappingURL=authValidation.middleware.js.map