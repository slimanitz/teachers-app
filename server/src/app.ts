import * as express from "express";
import { DbContext } from "./database/db-context";
import * as bodyParser from "body-parser";
import { InversifyExpressServer } from "inversify-express-utils";
import * as cors from "cors";
import "./controllers";
import container from "./infrastructure/container";
var morgan = require("morgan");

const db = new DbContext();

let server = new InversifyExpressServer(container);
server.setConfig(async (app) => {
  // Add in the application/x-www-form-urlencoded parser.
  app.use(bodyParser.urlencoded({ extended: true }));

  // Add in the application/json parser.
  app.use(bodyParser.json());

  // Enables CORS.
  app.use(cors({ origin: true, credentials: true }));
  var logger = morgan("combined");
  app.use(logger);
});

let app = server.build();

app.listen(3000, async () => {
  await db.sync({ force: false });
  console.log("The app is running at localhost:3000 at date");
});
