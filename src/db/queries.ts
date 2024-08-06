import { pool } from './pool'

async function getAllScore() {
    const { rows } = await pool.query("SELECT * FROM scoreboard")
    return rows;
}

async function insertIntoScoreboard(name: string, score: number) {
    await pool.query("INSERT INTO scoreboard (name, score) VALUES ($1, $2)", [name, score]);
}

async function getLocations() {
    const { rows } = await pool.query("SELECT * FROM WaldoImageLocations")
    return rows
}

export { getAllScore, insertIntoScoreboard, getLocations };