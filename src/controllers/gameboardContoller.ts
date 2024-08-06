import { Request, Response, NextFunction } from "express";
import { getAllScore, insertIntoScoreboard, getLocations } from '../db/queries'

export const getScoreboard = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const scoreboard = await getAllScore();
        res.status(200).json(scoreboard)
    } catch (error) {
        next(error)
    }
}

export const postScoreboard = async (req: Request, res: Response, next: NextFunction) => {
    const { name, time } = req.body
    try {
        await insertIntoScoreboard(name, time)
        res.send({ message: 'Scoreboard updated!' })

    } catch (error) {
        console.error('Error inserting into scoreboard:', error);
        res.status(500).send({ message: 'An error occurred' });
    }
}

export const validateWaldoPosition = async (req: Request, res: Response, next: NextFunction) => {
    const { renderedX, renderedY } = req.body;

    const locationObject = await getLocations()

    const foundLocation = locationObject.find(location => {
        // console.log('location', location);
        console.log('renderedX', renderedX);
        const xStartMatch = location.xstart <= renderedX
        console.log('xStartMatch', xStartMatch);
        if (!xStartMatch) {
            console.log('Fails because xStart does not match');
            return false;
        }
        const xEndMatch = renderedX <= location.xend
        console.log('xEndMatch', xEndMatch);
        if (!xEndMatch) {
            console.log('Fails because xEnd does not match');
            return false;
        }
        console.log('renderedY', renderedY);
        const yStartMatch = location.ystart <= renderedY
        console.log('yStartMatch', yStartMatch);
        if (!yStartMatch) {
            console.log('Fails because yStart does not match');
            return false;
        }
        const yEndMatch = renderedY <= location.yend
        console.log('yEndMatch', yEndMatch);
        if (!yEndMatch) {
            console.log('Fails because yEnd does not match');
            return false;
        }
        console.log('Succeeds because everything matches');
        return true
    });
    if (foundLocation) {
        console.log(`You found ${foundLocation.sectionlabel}`);
        res.send({
            message: `You found ${foundLocation.sectionlabel}`,
            found: true,
            picture: foundLocation.sectionlabel
        });
    } else {
        console.log('Waldo not found');
        res.send({
            message: 'Waldo not found',
            found: false
        });
    }

}