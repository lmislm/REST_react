/**
 * Created by lmislm on 2018/2/14- 10:41.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// "geometry": {
//     "type": "Point",
//     "coordinates": [125.6, 10.1]
// }

//create geolacation Schema
const GeoSchema = new Schema({
   type: {
       type: String,
       default:"Point"
   },
   coordinates: {
       type: [Number],
       index: "2dsphere"
   }
});
//create Schema & model
const AppSchema = new Schema({
    name:{
        type: String,
        required:[true,'Name field is require']
    },
    rank:{
        type: String,
        required:[true,'Name field is require']
    },
    available: {
        type: Boolean,
        default: false
    },
    //add in geo location
    geometry: GeoSchema
});

const App = mongoose.model('app',AppSchema);

module.exports = App;