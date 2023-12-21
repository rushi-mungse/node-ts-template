import dotenv from "dotenv";
dotenv.config();

export const { PORT, NODE_ENV } = process.env;
export { default as logger } from "./logger";
