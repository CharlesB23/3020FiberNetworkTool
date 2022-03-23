const express = require("express");
//const standards = require("../models/standards.model");
//const Fibre = require("../models/fibres.model");
//const Olt = require("../models/olts.model");
//const Onu = require("../models/onus.model");
const Splitter = require("../models/splitters.model");
const router = new express.Router();

//POST http://localhost:3000/api/standards
router.post("/api/splitters",(req,res,next)=>{
    let splitters = new Splitter({
        Name: req.body.Name,
        Wavelength: req.body.Wavelength,
        InsersionLoss128:  req.body.InsersionLoss128, 
        InsersionLoss64: req.body.InsersionLoss64,
        InsersionLoss32: req.body.InsersionLoss32,
        InsersionLoss16: req.body.InsersionLoss16,
        InsersionLoss8: req.body.InsersionLoss8,
        InsersionLoss4: req.body.InsersionLoss4,
        InsersionLoss2: req.body.InsersionLoss2,
        Polarization128: req.body.Polarization128,
        Polarization64: req.body.Polarization64,
        Polarization32: req.body.Polarization32,
        Polarization16: req.body.Polarization16,
        Polarization8: req.body.Polarization8,
        Polarization4: req.body.Polarization4,
        Polarization2: req.body.Polarization2,
        MaxPower: req.body.MaxPower,
        SplitRatio: req.body.SplitRatio,
        Link: req.body.Link


    });
    splitters.save().then(createdSplitter=>{
        res.send(createdSplitter);
        res.status(201).json({
            message: "Splitter successfully added.",
        
        });
    });
});

router.get("/api/splitters",(req,res,next)=>{
    Splitter.find().then(documents=>{ res.send(documents),
        res.status(201).json({
            message: "splitters fetched successfully!",
            
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