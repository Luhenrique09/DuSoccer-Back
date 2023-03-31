"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const users_router_1 = require("./routers/users-router");
const dayjs_1 = __importDefault(require("dayjs"));
const authentication_router_1 = require("./routers/authentication-router");
const championship_router_1 = require("./routers/championship-router");
dotenv_1.default.config();
const app = (0, express_1.default)();
app
    .use((0, cors_1.default)())
    .use(express_1.default.json())
    .get("/health", (_req, res) => res.send("OK!"))
    .use("/users", users_router_1.usersRouter)
    .use("/auth", authentication_router_1.authenticationRouter)
    .use("/championship", championship_router_1.championshipRouter);
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`${(0, dayjs_1.default)().format("YYYY-MM-DD HH:mm:ss")} [Listening ON] Port: ${PORT}`);
});
//# sourceMappingURL=app.js.map