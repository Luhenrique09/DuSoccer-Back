"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticationRouter = void 0;
const express_1 = require("express");
const authentication_controller_1 = require("../controllers/authentication-controller");
const authenticationRouter = (0, express_1.Router)();
exports.authenticationRouter = authenticationRouter;
authenticationRouter.post("/sign-in", authentication_controller_1.singInPost);
//# sourceMappingURL=authentication-router.js.map