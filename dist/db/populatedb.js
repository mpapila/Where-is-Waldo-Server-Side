#! /usr/bin/env node
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
const { Client } = require("pg");
const SQL = `
CREATE TABLE IF NOT EXISTS scoreboard (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR ( 255 ),
  score INTEGER
);

INSERT INTO scoreboard (name, score) 
VALUES
  ('admin', 10000);

CREATE TABLE IF NOT EXISTS LargeWaldoImages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  imageName VARCHAR(255) NOT NULL,   
  imagePath VARCHAR(255) 
);

INSERT INTO LargeWaldoImages (imageName, imagePath) 
VALUES
  ('Big Waldo', '/public/waldo.jpg');

CREATE TABLE waldoimagelocations (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  masterimageid INTEGER NOT NULL,          
  sectionlabel VARCHAR(50) NOT NULL,       
  xstart INTEGER NOT NULL,                 
  xend INTEGER NOT NULL,                   
  ystart INTEGER NOT NULL,                 
  yend INTEGER NOT NULL,                   
  FOREIGN KEY (masterimageid) REFERENCES LargeWaldoImages(id) 
);

INSERT INTO waldoimagelocations (masterimageid, sectionlabel, xstart, xend, ystart, yend)
VALUES
  (1, 'miniOne', 940, 990, 845, 912),
  (1, 'miniTwo', 131, 176, 923, 966),
  (1, 'miniThree', 493, 568, 372, 439);
`;
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("seeding...");
        const client = new Client({
            connectionString: `postgresql://u_94553736_7018_4664_a5fc_b50e03599f64:B5lnsfq221kDvg0qZqd43Zf8Or97bn62652Cl87Ob04lpPYjdoP8@pg.rapidapp.io:5433/db_94553736_7018_4664_a5fc_b50e03599f64?ssl=true&sslmode=no-verify&application_name=rapidapp_nodejs`,
        });
        yield client.connect();
        yield client.query(SQL);
        yield client.end();
        console.log("done");
    });
}
main();
