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
app.use("/auth", authRouter);
app.use("/tracking-parcel", trackingRouter);

export default app;
