import express from "express";
import Connection from "./database/db.js";

const app = express();
Connection(); // npm i nodemon here - to automatically restart the server as soon as it detects changes rather than starting it manually everytime
const PORT = 8000;
app.listen(PORT, () => console.log(`Server started successfully on port ${PORT}`));