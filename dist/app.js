"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const users_router_1 = require("./routers/users-router");
dotenv_1.default.config();
const app = (0, express_1.default)();
app
    .use((0, cors_1.default)())
    .use(express_1.default.json())
    .get("/health", (_req, res) => res.send("OK!"))
    .use("/users", users_router_1.usersRouter);
app.listen(4000, () => {
    console.log("Server running i port: 4000");
});
//# sourceMappingURL=app.js.map