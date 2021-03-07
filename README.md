# Streaming Data

Stream data from kafka to relation database (postgres)

## Implementation

Streaming data has been implemented using [Node.js](https://nodejs.org) and [TypeScript](https://www.typescriptlang.org/). The codebase has been designed and developed in such a way that it should be easy to understand and maintain.

## Prerequisites

- [NPM](https://www.npmjs.com/) (version: 7.6.0) - a Package manager for Node.js.
- [Node.js](https://nodejs.org/en/) (version: 15.0.0) - a JavaScript runtime built on Chrome's V8 JavaScript engine.
- [Docker Compose](https://docs.docker.com/compose/) (version: 1.25.5) - a tool for defining and running multi-container Docker applications.

## Setup

1. Move in `streaming-data` directory

```bash
$ cd streaming-data
```

2. Run `postgres` and `kafka` container

```bash
$ docker-compose up -d postgres kafka1
```

3. Install required dependencies

```bash
$ npm install
```

4. Run server to schedule cron job to publish call record to kafka topic

```bash
$ npm start
```

4. Subscribe the kafka topic to store call record to database

```bash
$ npm run kafka-consumer
```

## Run Linter

```bash
$ npm run lint
```
