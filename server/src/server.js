
const http = require ("http");
const app = require("./app");
const mongoose = require("mongoose");

const {loadPlanetsData} = require("./models/planets.model") ///helping to load data before listening

const PORT = process.env.PORT || 8000;
const MONGO_URL ="mongodb+srv://nasa-api:XIUUYV0LOVFwpj6h@cluster0.rotwgcj.mongodb.net/?retryWrites=true&w=majority"

const server = http.createServer(app);

mongoose.connection.once("open" , () => {
  console.log("MongoDb connection ready !")
});

mongoose.connection.on("error", (err) => {
  console.error(err)
});


// main().catch(err => console.log(err));



async function startServer(){
  
  await mongoose.connect(MONGO_URL)
   

  await loadPlanetsData();

  server.listen(PORT, () =>{

   console.log(`Listening on port ${PORT}`)
     
 
 });
}

startServer();

// server.listen(PORT, () =>{

//    const host = server.address().address;
//     //const port = server.address().port;
//   // console.log("listening  at http://%s:%s", host, port)
//   console.log(`Listening on port http://localhost:${PORT}`)
    

// })