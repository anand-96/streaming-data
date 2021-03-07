import http from "http";
import express from "express";

import { config } from "./config/app";
import { initCronJobs } from "./jobs";
import { initDatabase } from "./lib/typeorm";

const initApp = async () => {
  try {
    const expressApp = express();
    expressApp.use(express.json());
    expressApp.use(express.static("./"));

    http.createServer(expressApp).listen(config.get("port"));
    console.info(`Server listening at port ${config.get("port")}`);

    await initDatabase();

    initCronJobs();
  } catch (error) {
    console.log(`Error in initialising App:- ${error.message}`);
  }
};

initApp()
  .then()
  .catch(error => console.error(error));
