import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cognifyRouter from "./api/cognify/index.js";
//import "./db";
import defaultErrHandler from "./errHandler/index.js";
//import authenticate from "./authenticate";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use("/api/cognify", cognifyRouter);

app.use(defaultErrHandler);

app.listen(port, () => {
    console.info(`Server running at ${port}`);
});
