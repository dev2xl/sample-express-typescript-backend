import express from "express";

// Routers
import authRouter from "@/routes/auth";
import trackingRouter from "@/routes/tracking";

// Setup app
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Setup routes
app.use("/api/auth", authRouter);
app.use("/api/tracking-parcel", trackingRouter);

export default app;
