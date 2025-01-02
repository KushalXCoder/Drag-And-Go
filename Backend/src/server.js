import app from "../src/app.js";
import http from "http";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./db/db.js";

const server = http.createServer(app);

connectDB()
.then(() => {
    server.listen(process.env.PORT, () => {
        console.log(`Example app running on PORT: ${process.env.PORT}`);
    });
})
.catch((error) => {
    console.log("Error connecting to MongoDB", error);
});