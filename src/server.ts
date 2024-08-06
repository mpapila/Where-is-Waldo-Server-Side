import express from 'express';
import router from './routes/routes'
import dotenv from 'dotenv';
import cors from 'cors'
import { getScoreboard } from './controllers/gameboardContoller';
import compression from 'compression';
import helmet from 'helmet';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(compression());


app.use(
    helmet.contentSecurityPolicy({
        directives: {
            "script-src": ["'self' 'unsafe-inline'", "code.jquery.com", "cdn.jsdelivr.net"],
        },
    }),
);
app.use('/', router)


app.listen('3000', () => {
    console.log(`server is running at 3000`)
})