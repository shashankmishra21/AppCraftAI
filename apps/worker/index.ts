import express from "express";
import cors from "cors";
import { prismaClient } from "db/client";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/prompt", async (req, res) => {
    const { prompt, projectId } = req.body;
    
});