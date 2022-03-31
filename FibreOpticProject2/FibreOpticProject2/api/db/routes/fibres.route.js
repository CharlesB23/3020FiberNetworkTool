//Created by Charles Bachew
//Reference - David Akim 2022
const express = require("express");
//const standards = require("../models/standards.model");
const Fibre = require("../models/fibres.model");
const router = new express.Router();

//POST http://localhost:3000/api/standards
router.post("/api/fibres",(req,res,next)=>{
    let fibres = new Fibre({
        Name: req.body.Name,
        FibreAttenuation: req.body.FibreAttenuation,
        FibreConnectorLoss:  req.body.FibreConnectorLoss, 
        FibreDispersion: req.body.FibreDispersion,
        Link: req.body.Link
       
    });
    fibres.save().then(createdFibre=>{
        res.send(createdFibre);
        res.status(201).json({
            message: "Fibre successfully added.",
        
        });
    });
});

router.get("/api/fibres",(req,res,next)=>{
    Fibre.find().then(documents=>{ res.send(documents),
        res.status(201).json({
            message: "fibres fetched successfully!",
            
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