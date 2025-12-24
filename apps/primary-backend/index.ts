import express from 'express';
import cors from 'cors';
import { prismaClient } from 'db/client';
import { redisClient } from 'redis-app/client';
import { listen } from 'bun';
import { authMiddleware } from './middleware';

const app = express();
app.use(express.json());
app.use(cors());

app.post("/project", authMiddleware, async (req, res) => {
    const { prompt } = req.body;
    const userId = req.userId!;
    const description = prompt.split("\n")[0];
    const project = await prismaClient.project.create({
        data: { description, userId },

    });
    res.json({ projectId: project.id });
});

app.post("/projects", authMiddleware, async (req, res) => {
    const userId = req.userId!;
    const projects = await prismaClient.project.findMany({
        where: { userId },

    })
    res.json(projects);
})
app.listen(8080, () => {
    console.log('server started on port 8080');
});
