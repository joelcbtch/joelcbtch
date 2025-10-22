// ==============================
// Imports and Setup
// ==============================

import express from 'express';
import mqtt from 'mqtt';
import cors from 'cors';
import sqlite3 from 'sqlite3';

const app = express();
app.use(cors());
const db = new sqlite3.Database('backend/sensors.db');

db.run(`
  CREATE TABLE IF NOT EXISTS readings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    value REAL,
    time TEXT
  )
`);

// ==============================
// API Routes
// ==============================

app.get('/api/temp', (_, res) => {
  res.json(latest);
});

app.get('/api/average-today', (_, res) => {
  const startOfDay = new Date();
  startOfDay.setHours(0, 0, 0, 0);
  const isoStart = startOfDay.toISOString();

  db.get(
    `SELECT AVG(value) as avgTemp FROM readings WHERE time >= ?`,
    [isoStart],
    (err, row: { avgTemp: number } | undefined) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ average: row?.avgTemp ?? null });
    },
  );
});

app.get('/api/stats-today', (_, res) => {
  const startOfDay = new Date();
  startOfDay.setHours(0, 0, 0, 0);
  const isoStart = startOfDay.toISOString();

  db.get(
    `SELECT
      MIN(value) as minTemp,
      MAX(value) as maxTemp,
      COUNT(*) as count
     FROM readings
     WHERE time >= ?`,
    [isoStart],
    (err, row: { minTemp: number; maxTemp: number; count: number } | undefined) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(row ?? {});
    },
  );
});

app.get('/api/history-30min', (_, res) => {
  const now = new Date();
  const past30min = new Date(now.getTime() - 30 * 60 * 1000); // Subtract 30min directly

  const isoStart = past30min.toISOString();

  db.all(
    `SELECT time, value
     FROM readings
     WHERE time >= ?
     ORDER BY time ASC`,
    [isoStart],
    (err, rows) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(rows);
    },
  );
});

app.listen(3000, () => console.log('Backend + MQTT running at http://localhost:3000'));

// ==============================
// Dev HTTP POST Endpoint
// ==============================

app.use(express.json());
app.post('/api/temp', (req, res) => {
  const { value } = req.body;
  if (typeof value !== 'number') {
    return res.status(400).send('Invalid value');
  }
  latest = { value, time: new Date().toISOString() };
  res.sendStatus(200);
});

// ==============================
// In-Memory Latest Reading
// ==============================

let latest: { value: number; time: string } | null = null;

// ==============================
// MQTT Setup and Handling
// ==============================

const client = mqtt.connect('mqtt://localhost:1883'); // update to our broker address

client.on('connect', () => {
  client.subscribe('sensors/temp');
});

client.on('message', (topic, message) => {
  if (topic === 'sensors/temp') {
    const value = Number(message.toString());
    const time = new Date().toISOString();
    latest = { value, time };

    console.log('📡 Inserted reading:', value, time);
    db.run('INSERT INTO readings (value, time) VALUES (?, ?)', [value, time]);
  }
});
