"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const championship_repository_1 = __importDefault(require("../../repositories/championship-repository"));
async function createChampionship(name, numTeam, returnPlay, userId) {
    const data = {
        name,
        numTeam,
        returnPlay,
        owner: userId,
    };
    const result = await championship_repository_1.default.createChampionship(data);
    return result;
}
async function getUserChampionship(userId) {
    const result = await championship_repository_1.default.findUserChampionshipId(userId);
    return result;
}
const championshipService = {
    createChampionship,
    getUserChampionship
};
exports.default = championshipService;
//# sourceMappingURL=index.js.map