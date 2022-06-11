const launchesDatabase = require("./launches.mongo");
const planets = require("./planets.mongo");
 ///const planets = require("./planets.mongo");
 
const launches = new Map();

const DEFAULT_FLIGHT_NUMBER = 100;

const launch = {
    flightNumber:100,
    mission:"Kepler Exploration X",
    rocket:"646464", 
    launchDate:new Date("December 27, 2030"),
    target:'Kepler-1652 b',
    customers:["ZTM", "NASA"],
    upcoming:true,

    success:true,


};
saveLaunch(launch);

//launches.set(launch.flightNumber, launch );

////////////////
async function existsLaunchWithId(launchId){
    return await launchesDatabase.findOne({
        flightNumber:launchId
    });
}

////////Get Latest Launch/////////////
async function getLatestFlightNumber()
{
const latestLaunch = await  launchesDatabase
.findOne().sort({flightNumber:-1});
// .sort("-flightNumber");
if(!latestLaunch){
    return DEFAULT_FLIGHT_NUMBER;
}
return latestLaunch.flightNumber;

}

/////////////GET LAUNCH all LAUNCHES/////////

async function getAllLaunches(){
   return  await launchesDatabase.find({}, 
    {'_id':0, '__v':0});
}
/////////////SAVING NEW LAUNCHES///////////

async function saveLaunch(launch){
    const  planet = await planets.findOne({
   keplerName : launch.target,
    });
    if(!planet){
     throw new Error("Planet not found"); 
    }

await launchesDatabase.findOneAndUpdate({

flightNumber:launch.flightNumber,
}, launch, {
upsert:true,
});
}
/////////////ADDING NEW LAUNCHING///////

async function scheduleNewLaunch(launch ){
  const newFlightNumber = await getLatestFlightNumber() + 1;  
const newLaunch = Object.assign(launch,{
  
    success:true,
    upcoming:true,
    customers:['Zero to Mastery', 'NASA'],
    flightNumber:newFlightNumber,
});
await saveLaunch(newLaunch);
}



////////ABORT LAUNCH BY ID/////////
async function abortLaunchById(launchId){


 const aborted =  await launchesDatabase.updateOne({
    flightNumber:launchId,  //this is the key
}, {
    upcoming:false,
    success:false,
});
return aborted.modifiedCount ===1;
}




module.exports= { 
    existsLaunchWithId,  
    getAllLaunches,
    scheduleNewLaunch,
    abortLaunchById
};