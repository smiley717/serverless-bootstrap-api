import { RequestHandler } from "express";

/**
 * A higher-order function that wraps an async callback to properly trigger the
 * Express error-handling middleware on errors.
 *
 * @param fn an async callback.
 * @returns an Express callback that resolves the wrapped async fn.
 */
const asyncWrapper = (fn: RequestHandler) => (req, res, next) => {
  return Promise.resolve(fn(req, res, next)).catch(next);
};

export default asyncWrapper;
