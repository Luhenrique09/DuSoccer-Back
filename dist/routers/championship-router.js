"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.championshipRouter = void 0;
const express_1 = require("express");
const championship_controller_1 = require("../controllers/championship-controller");
const authValidation_middleware_1 = require("../middlewares/authValidation.middleware");
const championshipRouter = (0, express_1.Router)();
exports.championshipRouter = championshipRouter;
championshipRouter
    .all("/*", authValidation_middleware_1.authValidation)
    .post("/", championship_controller_1.createChampionship)
    .get("/userchampionship", championship_controller_1.getUserChampionship);
//# sourceMappingURL=championship-router.js.map