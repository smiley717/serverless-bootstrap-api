import { createHandler } from "../../bootstrap-server";
import app from "./app";

// This path must match the base path in the serverless http event
// without the proxy part.

// Requirements:
// 1. Must include a leading slash
// 2. Must not include a trailing slash
const BASE_PATH = "/web-api";

let cachedServer;

export const handler = createHandler(cachedServer, app, BASE_PATH);
