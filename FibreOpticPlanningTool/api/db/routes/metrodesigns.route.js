const express = require("express");
//const standards = require("../models/standards.model");
//const Fibre = require("../models/fibres.model");
//const Olt = require("../models/olts.model");
//const Onu = require("../models/onus.model");
const Metrodesign = require("../models/metrodesigns.model");
const router = new express.Router();

//POST http://localhost:3000/api/standards
router.post("/api/metrodesigns",(req,res,next)=>{


    let Name = req.body.Name;
    


    let metrodesigns = new Metrodesign({
        Name: req.body.Name,
       
       
    });
    metrodesigns.save().then(createdMertodesign=>{
        res.send(createdMertodesign);
        res.status(201).json({
            message: "Metrodesigns successfully added.",
        
        });
    });
});

router.get("/api/metrodesigns",(req,res,next)=>{
    Metrodesign.find().then(documents=>{ res.send(documents),
        res.status(201).json({
            message: "metrodesigns fetched successfully!",
            
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