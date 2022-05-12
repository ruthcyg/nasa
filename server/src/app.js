
const express = require("express"); 
const app = express();
const cors = require("cors");;//this is for the cross origin
const planetsRouter = require("./routes/planets/planets.router")

app.use(cors({
    origin:"http://localhost:3000",
}));

app.use(express.json());
app.use(planetsRouter);
module.exports= app;