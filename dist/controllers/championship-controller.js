"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserChampionship = exports.createChampionship = void 0;
const http_status_1 = __importDefault(require("http-status"));
const championship_service_1 = __importDefault(require("../service/championship-service"));
async function createChampionship(req, res) {
    const { name, numTeam, returnPlay } = req.body;
    const userId = res.locals.user.id;
    try {
        const result = await championship_service_1.default.createChampionship(name, numTeam, returnPlay, userId);
        console.log(result);
        return res.status(http_status_1.default.CREATED);
    }
    catch (error) {
        return res.status(http_status_1.default.NOT_FOUND);
    }
}
exports.createChampionship = createChampionship;
;
async function getUserChampionship(req, res) {
    const userId = res.locals.user.id;
    try {
        const result = await championship_service_1.default.getUserChampionship(userId);
        return res.status(http_status_1.default.OK).send(result);
    }
    catch (error) {
        return res.status(http_status_1.default.NOT_FOUND);
    }
}
exports.getUserChampionship = getUserChampionship;
//# sourceMappingURL=championship-controller.js.map