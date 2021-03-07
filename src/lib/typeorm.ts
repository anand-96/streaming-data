import { createConnection } from "typeorm";

let connection: any;

export const initDatabase = async () => {
  connection = await createConnection();
};

export const getConnection = async () => {
  if (!connection) {
    connection = await createConnection();
  }
  return connection;
};
