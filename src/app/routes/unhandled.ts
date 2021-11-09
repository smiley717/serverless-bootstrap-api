/**
 * @file Defines the unhandled route handler.
 */

import express from "express";
import { Boom } from "@hapi/boom";

const router = express.Router();

/**
 * Throws a 404 not found error for all requests.
 */
router.get("*", (req, res) => {
  throw new Boom("not found", { statusCode: 404 });
});

export default router;
