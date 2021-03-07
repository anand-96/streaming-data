const { config } = require("./dist/config/app")

const baseConfig = {
  "type": config.get("postgres.type"),
  "host": config.get("postgres.host"),
  "port": config.get("postgres.port"),
  "username": config.get("postgres.username"),
  "password": config.get("postgres.password"),
  "database": config.get("postgres.database"),
  "logging": config.get("postgres.logging"),
  "migrations": [ "dist/migrations/*.js" ],
  "entities": ["dist/entity/*.js"],
  "synchronize": false,
  "migrationsRun": true
}

module.exports = baseConfig;
