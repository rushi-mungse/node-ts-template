import "reflect-metadata";
import express from "express";
import { errorHandlerMiddleware } from "./middlewares";

const app = express();

app.use(express.static("public"));
app.use(express.json());

app.use(errorHandlerMiddleware);

export default app;
