import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRoutes from "./routes/user.routes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5174',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}));

app.use('/users', userRoutes);

app.get('/', (req,res) => {
    res.send("Hello World");
});

export default app;