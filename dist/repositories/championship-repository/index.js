"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../../database/db"));
async function createChampionship(data) {
    return db_1.default.championship.create({
        data,
    });
}
;
async function findUserChampionshipId(userId) {
    return db_1.default.championship.findMany({
        where: {
            ownerId: userId
        }
    });
}
const championshipRepository = {
    createChampionship,
    findUserChampionshipId
};
exports.default = championshipRepository;
//# sourceMappingURL=index.js.map