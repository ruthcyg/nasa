const fs = require('fs');
const path = require ("path")

const { parse } = require('csv-parse');


const habitablePlanets = [];

function isHabitablePlanet(planet) {
  return planet['koi_disposition'] === 'CONFIRMED'
    && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
    && planet['koi_prad'] < 1.6;
}

/*

we are solving a problem that occur when use creatstream 
because when we do exports to other file it automatically load
even our data has not stream that will makes us get empty array 
in order to avoid loading empty data we used the following :

const promise = new Promise ((resolve, reject) =>{
    resolve(42);
});
promise.then((result) => {});

or we can used await this make our code to wait for our data to load before continuing
const result = await promise;

*/
/////this is very important


function loadPlanetsData(){
 return new Promise((resolve, reject) =>
 {fs.createReadStream(path.join(__dirname, "..", "..","data", 'kepler_data.csv'))
  .pipe(parse({
    comment: '#',
    columns: true,
  }))
  .on('data', (data) => {
    if (isHabitablePlanet(data)) {
      habitablePlanets.push(data);
    }
  })
  .on('error', (err) => {
    console.log(err);
    reject(err)
  })
  .on('end', () => {
    console.log(`${habitablePlanets.length} habitable planets found!`);
    resolve();
  });
});
}




  module.exports ={
      loadPlanetsData,
    planets:habitablePlanets,
  }
