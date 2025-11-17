import aedes from 'aedes';
import { createServer } from 'net';

const broker = new aedes();

broker.on('client', (client) => {
    console.log(`Client connected: ${client?.id}`);
});

broker.on('subscribe', (subs, client) => {
    console.log(`Client ${client?.id} subscribed to:`, subs.map(s => s.topic).join(', '));
}),

broker.on('publish', (packet, client) => {
    if (client) {
        console.log('Broker received from client:', packet.topic, packet.payload.toString());
    }
});

const server = createServer(broker.handle);
server.listen(1883, () => {
    console.log('Aedes broker running on port 1883')
});
