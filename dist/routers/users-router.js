"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRouter = void 0;
const express_1 = require("express");
const users_controller_1 = require("../controllers/users-controller");
const usersRouter = (0, express_1.Router)();
exports.usersRouter = usersRouter;
usersRouter.post("/sign-up", users_controller_1.usersPost);
//# sourceMappingURL=users-router.js.map