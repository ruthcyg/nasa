const mongoose = require ("mongoose");


const planetSchema = new  mongoose.Schema({
keplerName:{
  type:String,
  required:true,
 

    },

});
//const Planet =mongoose.model("Planet", planetSchema)
module.exports= mongoose.model("Planet", planetSchema)
// module.exports = {
//   Planet,
// }