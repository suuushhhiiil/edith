import express from "express";
import bodyParser from "body-parser";
import Connection from "./database/db.js";
import Route from "./routes/route.js";
import cors from "cors";


const app = express();

app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use("/", Route);

Connection(); //nodemon here - to automatically restart the server as soon as it detects changes rather than starting it manually everytime

const PORT = 8080;

app.listen(PORT, () => console.log(`Server started successfully on port ${PORT}`));