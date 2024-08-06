"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllScore = getAllScore;
exports.insertIntoScoreboard = insertIntoScoreboard;
exports.getLocations = getLocations;
const pool_1 = require("./pool");
function getAllScore() {
    return __awaiter(this, void 0, void 0, function* () {
        const { rows } = yield pool_1.pool.query("SELECT * FROM scoreboard");
        return rows;
    });
}
function insertIntoScoreboard(name, score) {
    return __awaiter(this, void 0, void 0, function* () {
        yield pool_1.pool.query("INSERT INTO scoreboard (name, score) VALUES ($1, $2)", [name, score]);
    });
}
function getLocations() {
    return __awaiter(this, void 0, void 0, function* () {
        const { rows } = yield pool_1.pool.query("SELECT * FROM WaldoImageLocations");
        return rows;
    });
}
