//Created by Charles Bachew
//Reference - David Akim 2022
const express = require("express");
//const standards = require("../models/standards.model");
//const Fibre = require("../models/fibres.model");
//const Olt = require("../models/olts.model");
const Onu = require("../models/onus.model");
const router = new express.Router();

//POST http://localhost:3000/api/standards
router.post("/api/onus",(req,res,next)=>{
    let onus = new Onu({
        Name: req.body.Name,
        StandardSpec: req.body.StandardSpec,
        DownstreamRate:  req.body.DownstreamRate, 
        UpstreamRate: req.body.UpstreamRate,
        PowerConsumption: req.body.PowerConsumption,
        Link: req.body.Link

       
    });
    onus.save().then(createdOnu=>{
        res.send(createdOnu);
        res.status(201).json({
            message: "Onu successfully added.",
        
        });
    });
});

router.get("/api/onus",(req,res,next)=>{
    Onu.find().then(documents=>{ res.send(documents),
        res.status(201).json({
            message: "onus fetched successfully!",
            
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