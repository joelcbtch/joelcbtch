# cavatech (cavatech)

Backend tutorial

## Install the dependencies

```bash
bun install
```

## Development

### Run broker

```bash
bun run backend/broker.ts
```

### Backend (MQTT server + Express API)

```bash
bun run backend/server.ts
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
bun run dev
```

### Simulate sensor data

Single value
```bash
bun run backend/publish.ts 23.5
```

Multiple values
```bash
bun run backend/publish.ts 10
```

### Lint the files

```bash
bun run lint
```

### Format the files

```bash
bun run format
```

### Build the app for production

```bash
bun run build
```

### Customize the configuration

See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).
