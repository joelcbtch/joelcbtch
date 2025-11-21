import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('backend/sensors.db');

const now = new Date();
const entries: { time: string; value: number }[] = [];

for (let day = 0; day <= 3; day++) {
    const base = new Date();
    base.setDate(base.getDate() - day);
    base.setHours(0, 0, 0, 0);

    const lastHour = base.getDate() === now.getDate() ? now.getHours() : 23;
    for (let hour = 0; hour <= lastHour; hour++) {
        const t = new Date(base.getTime() + hour * 3600000);
        let v;

        if (false) { // TODO: kolla nattid (ex.vis 0-6 och 20-0)
            // kallare på natten
        } else {
            v = 20 + Math.random() * 5; // varmare på dagen
        }
        
        entries.push({ time: t.toISOString(), value: Number(v.toFixed(2)) });
    }
}

db.serialize(() => {
    const stmt = db.prepare('INSERT INTO readings (value, time) VALUES (?, ?)');

    entries.forEach((e) => {
        //stmt.run(e.value, e.time);
    });

    stmt.finalize(() => {
        console.log(`Inserted ${entries.length} historical readings.`);
        db.close();
    });
});
