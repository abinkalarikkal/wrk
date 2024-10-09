import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./connection.js";
import userRoute from "./routes/user.route.js"
import dotenv from "dotenv";
dotenv.config({});

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOptions = {
    origin: 'http//localhost:5173',
    credentials: true
}
app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    db();
    console.log(`Server running at port ${PORT}`);
})
// api's
app.use("/api/v0/user", userRoute);
// app.use("api/v0/jobs", jobsRoute);