import convict from "convict";

export const config = convict({
  app: {
    name: {
      doc: "Name of the service",
      format: String,
      default: "server"
    }
  },
  env: {
    doc: "The application environment.",
    format: ["production", "development", "staging", "test"],
    default: "development",
    env: "NODE_ENV"
  },
  port: {
    doc: "The port to bind.",
    format: "port",
    default: 3000,
    env: "PORT"
  },
  postgres: {
    type: {
      doc: "Database type",
      format: String,
      default: "postgres",
      env: "DB_TYPE",
      sensitive: true
    },
    database: {
      doc: "Database Name",
      format: String,
      default: "streaming_data",
      env: "POSTGRES_DB",
      sensitive: true
    },
    password: {
      doc: "Database Password",
      format: String,
      default: "postgres",
      env: "POSTGRES_PASSWORD",
      sensitive: true
    },
    username: {
      doc: "Database User Name",
      format: String,
      default: "postgres",
      env: "POSTGRES_USER",
      sensitive: true
    },
    host: {
      doc: "Database host",
      format: String,
      default: "localhost",
      env: "DB_HOST",
      sensitive: true
    },
    port: {
      doc: "Database port",
      format: "port",
      default: 5432,
      env: "PGPORT",
      sensitive: true
    },
    logging: {
      doc: "",
      format: Boolean,
      default: true,
      env: "DB_LOGGING",
      sensitive: true
    }
  },
  kafka: {
    host: {
      doc: "Kafka host",
      format: String,
      default: "localhost:9092",
      env: "KAFKA_HOST",
      sensitive: true
    }
  },
  cron: {
    streamingTimePattern: {
      doc: "Time pattern for streaming cron job",
      format: String,
      default: "*/10 * * * * *",
      env: "STREAMING_CRON_PATTERN"
    }
  }
});

console.log("Starting service with", config.toString());

config.validate({ allowed: "strict" });
