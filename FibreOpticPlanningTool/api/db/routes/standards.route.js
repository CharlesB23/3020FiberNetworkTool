const express = require("express");
//const standards = require("../models/standards.model");
const Standard = require("../models/standards.model");
const router = new express.Router();

//POST http://localhost:3000/api/standards
router.post("/api/standards",(req,res,next)=>{
    let standards = new Standard({
        Name: req.body.Name,
        DownstreamRate: req.body.DownstreamRate,
        UpstreamRate:  req.body.UpstreamRate, 
        Splitlimit: req.body.Splitlimit,
        Reach: req.body.Reach,
        PowerBudgetMax: req.body.PowerBudgetMax,
        PowerBudgetMin: req.body.PowerBudgetMin,
        Link: req.body.Link

    });
    standards.save().then(createdStandard=>{
        res.send(createdStandard);
        res.status(201).json({
            message: "Standard successfully added.",
        
        });
    });
});

router.get("/api/standards",(req,res,next)=>{
    Standard.find().then(documents=>{ res.send(documents),
        res.status(201).json({
            message: "Standard fetched successfully!",
            
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