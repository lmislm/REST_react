/**
 * Created by lmislm on 2018/2/14- 9:53.
 */
const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/appgo');
mongoose.Promise = global.Promise;

app.use(express.static('public'));

app.use(bodyParser.json());

//initialize routes
app.use('/api',routes);

//error handing middleware
app.use(function (err, req, res, next) {
    //get res err
   res.status(422).send({error: err.message});
});

app.post('/api', function (req,res) {
    console.log('GET request');
    res.send({name:'yosh'})
});

app.listen(process.env.port || 4000, function () {
    console.log('listening for question')
})