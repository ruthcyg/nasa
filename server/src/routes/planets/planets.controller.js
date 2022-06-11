
const {getAllPlanets} = require("../../models/planets.model")
//const {Planets } = require("../../models/planets.model")


async function httpGetAllPlanets(req, res){
//using the return it its makes our controller only send the request once
// and its prevented unexpected bug when there is a return that is where your function start 
//excuting

 // return res.status(200).json( await getAllPlanets());
  return res.status(200).json (await getAllPlanets());

}


module.exports ={
    httpGetAllPlanets,
}