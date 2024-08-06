"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes/routes"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const compression_1 = __importDefault(require("compression"));
const helmet_1 = __importDefault(require("helmet"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, compression_1.default)());
app.use(helmet_1.default.contentSecurityPolicy({
    directives: {
        "script-src": ["'self' 'unsafe-inline'", "code.jquery.com", "cdn.jsdelivr.net"],
    },
}));
app.use('/', routes_1.default);
app.listen('3000', () => {
    console.log(`server is running at 3000`);
});
