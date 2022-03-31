//Created by Charles Bachew
//Reference - David Akim 2022
const express = require("express");
//const standards = require("../models/standards.model");
//const Fibre = require("../models/fibres.model");
//const Olt = require("../models/olts.model");
//const Onu = require("../models/onus.model");
const Repeater = require("../models/repeaters.model");
const router = new express.Router();

//POST http://localhost:3000/api/standards
router.post("/api/repeaters",(req,res,next)=>{
    let repeaters = new Repeater({
        Name: req.body.Name,
        DataRate: req.body.DataRate,
        Wavelength:  req.body.Wavelength, 
        Power: req.body.Power,
        Range: req.body.Range,
        Link: req.body.Link

       
    });
    repeaters.save().then(createdRepeater=>{
        res.send(createdRepeater);
        res.status(201).json({
            message: "Repeater successfully added.",
        
        });
    });
});

router.get("/api/repeaters",(req,res,next)=>{
    Repeater.find().then(documents=>{ res.send(documents),
        res.status(201).json({
            message: "repeaters fetched successfully!",
            
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