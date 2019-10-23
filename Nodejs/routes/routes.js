const express = require("express");
const router = express.Router();
const User = require("../models/user");

// View api for displaying data
router.get('/view', function(request, response, next){
    User.find({}).then(function(data){
        response.send({status: "success", length:data.length, data:data});
    }).catch(next);
});

// Create api for saving data in database
router.post('/create', function(request, response, next){
    User.create(request.body).then(function(data){
        response.send({status:"success", data:data});
    }).catch(next);
});

// Edit api for updating the data
router.put('/edit/:id', function(request, response, next){
    User.findByIdAndUpdate({_id: request.params.id}, request.body).then(function(){
        User.findOne({_id: request.params.id}).then(function(data){
            response.send({status: "success", data: data});
        })
    }).catch(next);
});

// Delete api for deleting the data
router.delete('/delete/:id', function(request, response, next){
    User.findByIdAndRemove({_id: request.params.id}).then(function(){
        response.send({status: "success"});
    });
});

module.exports = router;