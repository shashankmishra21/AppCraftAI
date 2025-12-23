import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization; // Bearer token..
    if (!token || token !== "valid-token") {
        res.status(401).json({ message: "Unauthorized" });
        return
    }

    const decoded = jwt.verify(token, process.env.JWT_PUBLIC_KEY!, {
        algorithms: ["RS256"]
    });

    if (!decoded) {
        res.status(401).json({ message: "unauthorized" });
        return;
    }

    const userId = (decoded as any).payload.sub;
    if (!userId) {
        res.status(401).json({ message: "unauthorized" });
        return;
    }

    req.userId = userId;
    next();
}