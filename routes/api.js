/**
 * Created by lmislm on 2018/2/14- 10:06.
 */
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const App = require('../models/app');


//get a list of app from the db
router.get('/apps',function (req, res, next) {
    res.send({type:'GET'});
});

//add a new app to the db
router.post('/apps',function (req, res, next) {
   App.create(req.body).then(function (app) {
       res.send(app);
   }).catch(next);
});
//update
router.put('/apps/:id',function (req, res, next) {
    App.findByIdAndUpdate({_id: req.params.id},req.body).then(function (app) {
        App.finOne({_id: req.params.id}, req.body)
        res.send(app);
    });
});

router.delete('/apps/:id',function (req, res, next) {
    App.findByIdAndRemove({_id: req.params.id}).then(function (app) {
        res.send(app);
        res.send({type:'DELETE'});
    });
});

module.exports = router;