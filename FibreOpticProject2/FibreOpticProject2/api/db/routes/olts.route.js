//Created by Charles Bachew
//Reference - David Akim 2022
const express = require("express");
//const standards = require("../models/standards.model");
//const Fibre = require("../models/fibres.model");
const Olt = require("../models/olts.model");
const router = new express.Router();

//POST http://localhost:3000/api/standards
router.post("/api/olts",(req,res,next)=>{
    let olts = new Olt({
        Name: req.body.Name,
        StandardSpec: req.body.StandardSpec,
        DownstreamRate:  req.body.DownstreamRate, 
        UpstreamRate: req.body.UpstreamRate,
        Splitratio: req.body.Splitratio,
        TotalReach: req.body.TotalReach,
        PowerConsumption: req.body.PowerConsumption,
        Link: req.body.Link
       
    });
    olts.save().then(createdOlt=>{
        res.send(createdOlt);
        res.status(201).json({
            message: "Olt successfully added.",
        
        });
    });
});

router.get("/api/olts",(req,res,next)=>{
    Olt.find().then(documents=>{ res.send(documents),
        res.status(201).json({
            message: "olts fetched successfully!",
            
           // standards: documents
        });
    });
});



// router.post("",(req,res,next)=>{
//     res.status(201).json("Post message successful ");
// });

// router.get("",(req,res,next)=>{
//     res.status(201).json("GET message successful");
// });

module.exports = router;