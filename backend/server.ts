// ==============================
// Imports and Setup
// ==============================

import express from 'express';
import mqtt from 'mqtt';
import cors from 'cors';
import sqlite3 from 'sqlite3';
import path from 'path';

const app = express();
app.use(cors());

const dbPath = path.resolve('backend/sensors.db');
console.log('DB path:', dbPath);
const db = new sqlite3.Database(dbPath);

db.get("SELECT name FROM sqlite_master WHERE type='table' AND name='readings'", (err, row) => {
  if (!row) {
    console.error('readings table dows NOT exist!');
  } else {
    console.log('readings table exists.');
  }
});

db.run(`
  CREATE TABLE IF NOT EXISTS readings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    value REAL,
    time TEXT
  )
`);

// ==============================
// API Routes
//
// REST API: enables frontend to extract data from the database
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

// Del 1
//
//
// hint: read MAX value

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
  const past30min = new Date(now.getTime() - 30 * 60 * 1000);

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
//
// Connect: Subscribe as listener to MQTT broker
//          Listen for new data on topic sensors/temp
//
// Message: When broker has new data via sensors/temp -> catch it
//          Format data
//          Insert data into database
// ==============================

// Del 2
//
//

const client = mqtt.connect('mqtt://localhost:1883', { clientId: 'server-client' });

client.on('connect', () => {
  console.log('Server connected to broker');
  client.subscribe('sensors/temp', (err) => {
    if (err) {
      console.error('Subscription error:', err);
    } else {
      console.log('Subscribed to sensors/temp');
    }
  });
});

client.on('message', (topic, message) => {
  console.log('Received MQTT message:', topic, message.toString());
  if (topic === 'sensors/temp') {
    const value = Number(message.toString());
    const time = new Date().toISOString();
    latest = { value, time };

    console.log('Inserted reading:', value, time);
    db.run(
      'INSERT INTO readings (value, time) VALUES (?, ?)',
      [value, time],
      function (err) {
        if (err) {
          console.error('INSERT failed:', err.message);
        } else {
          console.log('INSERT OK (rowid):', this.lastID);
        }
      }
    );
  }
});
