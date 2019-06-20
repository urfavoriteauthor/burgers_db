var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/" , function(req,res){
    burger.all(function(burger_data){
        console.log(burger_data);
        res.render("index",{burger_data});
    })
})

router.put('/burgers/update', function(req,res){
    burger.update(req.body.burger_id, function(result){
        console.log(result);
        res.redirect('/');
    })
})

router.put("/burgers/update", function(req, res){
    var condition = "id" +req.params.id;
    console.log("condition", condition);
    burger.update({
        eaten:req.body.eaten
    })
    console.log(burger_data)
    res.render("index",{burger_data})

})

module.exports = router;