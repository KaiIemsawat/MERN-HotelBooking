import express, { Request, Response } from "express";
import cors from "cors";

import "dotenv/config";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/api/test", async (req: Request, res: Response) => {
    res.json({ message: "Endpoint test.." });
});

let PORT = 3303;

app.listen(3303, () => {
    console.log(`SERVER HAS LAUNCHED ON PORT :: ${PORT}`);
});
