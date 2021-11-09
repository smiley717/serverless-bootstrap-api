/**
 * @file Defines all routes for user institutions.
 */

import express from "express";
import { asyncWrapper } from "../../app/middleware";

const router = express.Router();

router.post(
  "/",
  asyncWrapper(async (req, res) => {
    res.json('post ok');
  })
);

router.get(
  "/",
  asyncWrapper(async (req, res) => {
    res.json('get ok');
  })
);


export default router;
