#! /usr/bin/env node

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

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
