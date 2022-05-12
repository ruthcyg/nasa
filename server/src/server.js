
const http = require ("http")
const app = require("./app")
const {loadPlanetsData} = require("./models/planets.model") ///helping to load data before listening

const PORT = process.env.PORT || 8000;
const server = http.createServer(app);


async function startServer(){

  await loadPlanetsData();
  server.listen(PORT, () =>{

   console.log(`Listening on port ${PORT}`)
     
 
 })
}

startServer();

// server.listen(PORT, () =>{

//    const host = server.address().address;
//     //const port = server.address().port;
//   // console.log("listening  at http://%s:%s", host, port)
//   console.log(`Listening on port http://localhost:${PORT}`)
    

// })