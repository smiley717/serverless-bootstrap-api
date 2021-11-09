/**
 * @file The application root. Defines the Express server configuration.
 */

import express, { Express } from "express";
import cors from "cors";
import { errorHandler, userApiGatewayAuthorizer } from "../../app/middleware";
import collectionsRouter from "../../app/routes/collections"
import unhandledRouter from "../../app/routes/unhandled";

const bodyParser = require('body-parser');
const session = require("express-session");
const { v4: uuidv4 } = require('uuid');
const app: Express = express();

app.use(session({
  secret: uuidv4(),
  resave: false,
  saveUninitialized: true,
}))

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/hc", (req, res) => {
  res.send("web-api OK");
});

app.use("/collections", collectionsRouter);
app.use("*", unhandledRouter);
app.use(errorHandler);

export default app;
