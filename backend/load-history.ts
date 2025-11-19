import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('backend/sensors.db');

const now = new Date();
const entries: { time: string; value: number }[] = [];

for (let day = 0; day < 10; day++) {
    const base = new Date(now.getTime() - day * 86400000);

    for (let i = 0; i < 10; i++) {
        const t =new Date(base.getTime() + i * 3600000);
        const v = 20 + Math.random() * 5;
        entries.push({ time: t.toISOString(), value: Number(v.toFixed(2)) });
    }
}

db.serialize(() => {
    const stmt = db.prepare('INSERT INTO readings (value, time) VALUES (?, ?)');

    entries.forEach((e) => {
        stmt.run(e.value, e.time);
    });

    stmt.finalize(() => {
        console.log('Inserted ${entries.length} historical readings.');
        db.close();
    });
});