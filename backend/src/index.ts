import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";

import userRoutes from "./routes/users";
import authRoutes from "./routes/auth";

mongoose.connect(process.env.MONGO_CONNECT as string);

const app = express();
let PORT = process.env.PORT || 3301;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.listen(3303, () => {
    console.log(`SERVER HAS LAUNCHED ON PORT :: ${PORT}`);
});
