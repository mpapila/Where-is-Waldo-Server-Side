"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const gameboardContoller_1 = require("../controllers/gameboardContoller");
const router = express_1.default.Router();
router.get('/scoreboard', gameboardContoller_1.getScoreboard);
router.post('/gameboard', gameboardContoller_1.postScoreboard);
router.post('/checkPosition', gameboardContoller_1.validateWaldoPosition);
exports.default = router;
