/**
 * Created by lmislm on 2018/2/14- 10:41.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    }
    //add in geo location
});

const App = mongoose.model('app',AppSchema);

module.exports = App;