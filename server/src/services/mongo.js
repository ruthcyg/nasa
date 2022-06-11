const mongoose = require ("mongoose");




///const MONGO_URL ="mongodb+srv://nasa-api:XIUUYV0LOVFwpj6h@cluster0.rotwgcj.mongodb.net/?retryWrites=true&w=majority"
const MONGO_URL = "mongodb+srv://nasadata:Goodluck&ruth2020@cluster0.iykmmh6.mongodb.net/?retryWrites=true&w=majority";

mongoose.connection.once("open" , () => {
  console.log("MongoDb connection ready !")
});

mongoose.connection.on("error", (err) => {
  console.error(err)
});

async function mongoConnect(){
 
  await mongoose.connect(MONGO_URL)
}

async function mongoDisconnect(){
await mongoose.disconnect();
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
}