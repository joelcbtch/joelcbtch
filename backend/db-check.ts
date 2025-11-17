import sqlite3 from 'sqlite3';
import path from 'path';

const dbPath = path.resolve('backend/sensors.db');
console.log('DB path:', dbPath);
const db = new sqlite3.Database(dbPath);

db.all('SELECT * FROM readings ORDER BY time DESC LIMIT 10', (err, rows) => {
    if (err) {
        console.error('DB error:', err);
    } else {
        console.log('Last 10 entries:\n', rows);
    }
    db.close();
})
