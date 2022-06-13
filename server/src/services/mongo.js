const mongoose = require ("mongoose");

require("dotenv").config();

const { MongoClient } = require("mongodb");

// Replace the uri string with your MongoDB connection string.
//const uri ='YOUR-MONGODB-URI'
//const client = new MongoClient(uri)

const MONGO_URL = process.env.MONGO_URL;

//const client = new MongoClient(MONGO_URL);

mongoose.connection.once("open" , () => {
  console.log("MongoDb connection ready !")
});

mongoose.connection.on("error", (err) => {
  console.error(err)
});

async function mongoConnect(){
 
  await mongoose.connect(MONGO_URL);
}

async function mongoDisconnect(){
await mongoose.disconnect();
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
}