# Where-is-Waldo Server

## Overview
The "Where-is-Waldo" server is a backend application built with Express and TypeScript to manage the scoreboard and validate the positions of Waldo in a game. The server connects to a PostgreSQL database to store and retrieve data.

## Client Repository
[Where-is-Waldo-Server-Side
](https://github.com/mpapila/Where-is-Waldo-Client-Side)

## Features
- RESTful API for handling scoreboard and gameboard operations
- Secure server setup with Helmet for security headers
- Compression middleware to improve performance
- CORS enabled for cross-origin requests
- Environment variable management with dotenv

## Technologies
- Node.js
- Express
- TypeScript
- PostgreSQL
- dotenv
- compression
- cors
- helmet

## API Endpoints

GET /scoreboard
Retrieve the scoreboard.

POST /gameboard
Update the scoreboard with a new entry.

POST /checkPosition
Validate Waldo's position.

## Deployment

API
The server is deployed on Glitch and is only for API calls: https://daily-thrilling-oriole.glitch.me

Example API call: https://daily-thrilling-oriole.glitch.me/scoreboard

Database
The database is deployed on RapidApp.io.

## Database Schema
Tables
- scoreboard: Stores player names and scores.
- LargeWaldoImages: Stores information about the large images of Waldo.
- waldoimagelocations: Stores the locations of Waldo within the images.

