import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";

import "dotenv/config";

mongoose.connect(process.env.MONGO_CONNECT as string);

const app = express();
let PORT = 3303;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/api/test", async (req: Request, res: Response) => {
    res.json({ message: "Endpoint test.." });
});

app.listen(3303, () => {
    console.log(`SERVER HAS LAUNCHED ON PORT :: ${PORT}`);
});
