//Created by Charles Bachew
//Reference - David Akim 2022
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
    let site1lat = req.body.site1lat;
    let site1long = req.body.site1long;
    let cenlat = req.body.cenlat;
    let cenlong = req.body.cenlong;
    let NumCons = req.body.NumCons;
    let Confib = req.body.Confib;
    let AttenFib = req.body.AttenFib;
    let NumSplices = req.body.NumSplices;
    let TransmittedPower = req.body.TransmittedPower;
    let DisFib = req.body.DisFib;

    
    

    const n1 = Number(site1lat);
    const n2 = Number(site1long);
    const n3 = Number(cenlat);
    const n4 = Number(cenlong);
    const c1 = Number(NumCons);
    const c2 = Number(Confib);
    const a1 = Number(AttenFib);
    const s1 = Number(NumSplices);
    const t1 = Number(TransmittedPower);
    const d1 = Number(DisFib);

    


    let metrodesigns = new Metrodesign({
        Name: req.body.Name,
        site1lat: req.body.site1lat,
        site1long: req.body.site1long,
        cenlat: req.body.cenlat,
        cenlong: req.body.cenlong,
        NumCons: req.body.NumCons,
        Confib: req.body.Confib,
        AttenFib: req.body.AttenFib,
        NumSplices: req.body.NumSplices,
        TransmittedPower: req.body.TransmittedPower,
        DisFib: req.body.DisFib,

        n1: Number(site1lat),
        n2: Number(site1long),
        n3: Number(cenlat),
        n4: Number(cenlong),
        c1: Number(NumCons),
        c2: Number(Confib),
        a1: Number(AttenFib),
        s1: Number(NumSplices),
        t1: Number(TransmittedPower),
        d1: Number(DisFib),



        TotalDistance: (6378.8*(Math.acos((Math.sin(n1)*Math.sin(n3))+ (Math.cos(n1)*Math.cos(n3)*Math.cos(n4-n2)) )))*2*(22/7),
        ConnectorLoss: c1*c2,
        AttenuationLoss: a1*((6378.8*(Math.acos((Math.sin(n1)*Math.sin(n3))+ (Math.cos(n1)*Math.cos(n3)*Math.cos(n4-n2)) )))*2*(22/7)),
        SpliceLoss: s1*( (6378.8*(Math.acos((Math.sin(n1)*Math.sin(n3))+ (Math.cos(n1)*Math.cos(n3)*Math.cos(n4-n2)) )))*2*(22/7)),
        RecievedPower: t1 - ((c1*c2) + (a1*((6378.8*(Math.acos((Math.sin(n1)*Math.sin(n3))+ (Math.cos(n1)*Math.cos(n3)*Math.cos(n4-n2)) )))*2*(22/7))) + ( s1*( (6378.8*(Math.acos((Math.sin(n1)*Math.sin(n3))+ (Math.cos(n1)*Math.cos(n3)*Math.cos(n4-n2)) )))*2*(22/7)))),
        Dispersion: d1*((6378.8*(Math.acos((Math.sin(n1)*Math.sin(n3))+ (Math.cos(n1)*Math.cos(n3)*Math.cos(n4-n2)) )))*2*(22/7))
       
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