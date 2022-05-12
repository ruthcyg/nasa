///const API_URL = "http:localhost:8000"; this will generate error uncaught promises json 
const API_URL = "http://localhost:8000";

async function httpGetPlanets() {
  // TODO: Once API is ready.
  const response = await fetch(`${API_URL}/planets`)
 
   return await response.json();
  // Load planets and return as JSON.
}



async function httpGetLaunches() {
  // TODO: Once API is ready.



}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};