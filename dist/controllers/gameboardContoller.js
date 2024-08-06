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
exports.validateWaldoPosition = exports.postScoreboard = exports.getScoreboard = void 0;
const queries_1 = require("../db/queries");
const getScoreboard = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const scoreboard = yield (0, queries_1.getAllScore)();
        res.status(200).json(scoreboard);
    }
    catch (error) {
        next(error);
    }
});
exports.getScoreboard = getScoreboard;
const postScoreboard = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, time } = req.body;
    try {
        yield (0, queries_1.insertIntoScoreboard)(name, time);
        res.send({ message: 'Scoreboard updated!' });
    }
    catch (error) {
        console.error('Error inserting into scoreboard:', error);
        res.status(500).send({ message: 'An error occurred' });
    }
});
exports.postScoreboard = postScoreboard;
const validateWaldoPosition = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { renderedX, renderedY } = req.body;
    const locationObject = yield (0, queries_1.getLocations)();
    const foundLocation = locationObject.find(location => {
        // console.log('location', location);
        console.log('renderedX', renderedX);
        const xStartMatch = location.xstart <= renderedX;
        console.log('xStartMatch', xStartMatch);
        if (!xStartMatch) {
            console.log('Fails because xStart does not match');
            return false;
        }
        const xEndMatch = renderedX <= location.xend;
        console.log('xEndMatch', xEndMatch);
        if (!xEndMatch) {
            console.log('Fails because xEnd does not match');
            return false;
        }
        console.log('renderedY', renderedY);
        const yStartMatch = location.ystart <= renderedY;
        console.log('yStartMatch', yStartMatch);
        if (!yStartMatch) {
            console.log('Fails because yStart does not match');
            return false;
        }
        const yEndMatch = renderedY <= location.yend;
        console.log('yEndMatch', yEndMatch);
        if (!yEndMatch) {
            console.log('Fails because yEnd does not match');
            return false;
        }
        console.log('Succeeds because everything matches');
        return true;
    });
    if (foundLocation) {
        console.log(`You found ${foundLocation.sectionlabel}`);
        res.send({
            message: `You found ${foundLocation.sectionlabel}`,
            found: true,
            picture: foundLocation.sectionlabel
        });
    }
    else {
        console.log('Waldo not found');
        res.send({
            message: 'Waldo not found',
            found: false
        });
    }
});
exports.validateWaldoPosition = validateWaldoPosition;
