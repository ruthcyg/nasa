
const {planets} = require("../../models/planets.model")


function getAllPlanets(req, res){
//using the return it its makes our controller only send the request once
// and its prevented unexpected bug when there is a return that is where your function start 
//excuting

  return res.status(200).json(planets);

}


module.exports ={
    getAllPlanets
}