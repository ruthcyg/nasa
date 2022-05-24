const path = require("path")
const express = require("express"); 
const app = express();
const cors = require("cors");;//this is for the cross origin
const morgan = require("morgan") // for request log
const planetsRouter = require("./routes/planets/planets.router")
const launchesRouter = require("./routes/launches/launches.router")
///////////////////////////////////
app.use(cors({
    origin:"http://localhost:3000",
}));
//////////////////////////////////////

app.use(morgan("combined"))

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/planets",planetsRouter);

app.use("/launches",launchesRouter);




app.get("/*", (req, res) =>{
res.sendFile(path.join(__dirname, "..", "public", "index.html"))
});

module.exports= app;