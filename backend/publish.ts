import mqtt from 'mqtt';

const client = mqtt.connect('mqtt://localhost:1883', { clientId: 'publisher-client' });

const arg = process.argv[2];

client.on('connect', () => {
    // If numeric value given, send once
    if (arg && !isNaN(Number(arg))) {
        client.publish('sensors/temp', arg, () => {
            console. log('Sent single:', arg);
            client.end();
        });
        return;
    }

    // Else send multiple random values
    const count = Number(arg) || 5;
    let sent = 0;

    const interval = setInterval(() => {
        if (sent >= count) {
            clearInterval(interval);
            client.end();
            return;
        }
        const value = (22 + Math.floor(Math.random() * 5)).toString();
        client.publish('sensors/temp', value);
        console.log('Sent random:', value);
        sent++;
    }, 1000);
});
