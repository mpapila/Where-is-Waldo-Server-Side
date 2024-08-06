import express from 'express';
import { getScoreboard, postScoreboard, validateWaldoPosition } from '../controllers/gameboardContoller';


const router = express.Router()

router.get('/scoreboard', getScoreboard)
router.post('/gameboard', postScoreboard)
router.post('/checkPosition', validateWaldoPosition)

export default router;