//Created by Charles Bachew
//Reference - David Akim 2022
const express = require("express");
//const standards = require("../models/standards.model");
const Subdesign = require("../models/subdesigns.model");
const router = new express.Router();

//POST http://localhost:3000/api/standards
router.post("/api/subdesigns",(req,res,next)=>{

     let Name = req.body.Name;
    let LatStation1 = req.body.LatStation1;
    let LongStation1 = req.body.LongStation1;
    let LatStation2 = req.body.LatStation2;
    let LongStation2 = req.body.LongStation2;
    let ConnectorLossFib = req.body.ConnectorLossFib;
    let NumCons = req.body.NumCons;
    let AttenuationFib = req.body.AttenuationFib;
    let SpliceFib = req.body.SpliceFib;
    let NumSplices = req.body.NumSplices;
    let TransmitterPower = req.body.TransmitterPower;
    let ReceiverSensitivity = req.body.ReceiverSensitivity;
    let dispersionfib = req.body.dispersionfib;

    
    
    

    const n1 = Number(LatStation1);
    const n2 = Number(LongStation1);
    const n3 = Number(LatStation2);
    const n4 = Number(LongStation2);
    const c1 = Number(ConnectorLossFib);
    const c2 = Number(NumCons);
    const a1 = Number(AttenuationFib);
    const s1 = Number(SpliceFib);
    const s2 = Number(NumSplices);
    const t1 = Number(TransmitterPower);
    const r1 = Number(ReceiverSensitivity);
    const d1 = Number(dispersionfib);

    


    let subdesigns = new Subdesign({


       Name: req.body.Name,
        LatStation1: req.body.LatStation1,
        LongStation1:  req.body.LongStation1,
        LatStation2: req.body.LatStation2,
        LongStation2:  req.body.LongStation2,
        ConnectorLossFib:  req.body.ConnectorLossFib,
        NumCons:  req.body.NumCons,
        AttenuationFib: req.body.AttenuationFib,
        SpliceFib: req.body.SpliceFib,
        NumSplices: req.body.NumSplices,
        TransmitterPower: req.body.TransmitterPower,
        ReceiverSensitivity: req.body.ReceiverSensitivity,
        dispersionfib: req.body.dispersionfib,

        
        n1: Number(LatStation1), //x1
        n2: Number(LongStation1), //y1
        n3: Number(LatStation2), //x2
        n4: Number(LongStation2), //y2
        c1: Number(ConnectorLossFib),
        c2: Number(NumCons),
        a1: Number(AttenuationFib),
        s1: Number(SpliceFib),
        s2: Number(NumSplices),
        t1: Number(TransmitterPower),
        r1: Number(ReceiverSensitivity),
        d1: Number(dispersionfib),


       // OSlength: 6378.8*(Math.acos((Math.sin(n3)*Math.sin(n5))+ (Math.cos(n3)*Math.cos(n5)*Math.cos(n6-n4)) )),

       // TotalDistance: n1 + n2 + n3 + n4,

       TotalDistance: 6378.8*(Math.acos((Math.sin(n1)*Math.sin(n3))+ (Math.cos(n1)*Math.cos(n3)*Math.cos(n4-n2)) )),
        ConnectorLoss: c1*c2,
        AttenuationLoss: a1*(6378.8*(Math.acos((Math.sin(n1)*Math.sin(n3))+ (Math.cos(n1)*Math.cos(n3)*Math.cos(n4-n2)) ))),
        SpliceLoss: s1*s2,
        ReceivedPower: t1 - ((c1*c2) + (a1*(6378.8*(Math.acos((Math.sin(n1)*Math.sin(n3))+ (Math.cos(n1)*Math.cos(n3)*Math.cos(n4-n2)) )))) + (s1*s2)),
        LossLimit: ((t1- r1 - (c1*c2)))/((a1*(6378.8*(Math.acos((Math.sin(n1)*Math.sin(n3))+ (Math.cos(n1)*Math.cos(n3)*Math.cos(n4-n2)) ))))+(s1*s2)),
        dispersion: d1*(6378.8*(Math.acos((Math.sin(n1)*Math.sin(n3))+ (Math.cos(n1)*Math.cos(n3)*Math.cos(n4-n2)) ))),
        NumberofRepeaters: Math.floor((6378.8*(Math.acos((Math.sin(n1)*Math.sin(n3))+ (Math.cos(n1)*Math.cos(n3)*Math.cos(n4-n2)) )))/(((t1-(c1*c2)))/((a1*(6378.8*(Math.acos((Math.sin(n1)*Math.sin(n3))+ (Math.cos(n1)*Math.cos(n3)*Math.cos(n4-n2)) ))))+(s1*s2))))




        
        
       
    });
    subdesigns.save().then(createdSubdesign=>{
        res.send(createdSubdesign);
        res.status(201).json({
            message: "Subdesigns successfully added.",
        
        });
    });
});

router.get("/api/subdesigns",(req,res,next)=>{
    Subdesign.find().then(documents=>{ res.send(documents),
        res.status(201).json({
            message: "Subdesigns fetched successfully!",
            
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