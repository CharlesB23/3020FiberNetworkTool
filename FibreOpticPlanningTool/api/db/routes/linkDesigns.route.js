const express = require("express");
//const standards = require("../models/standards.model");
const linkDesign = require("../models/linkDesigns.model");
const router = new express.Router();

//POST http://localhost:3000/api/standards
router.post("/api/linkDesigns",(req,res,next)=>{
    //const n1;
    //const n2;
    let Name = req.body.Name;
    let NumUsersA1 = req.body.NumUsersA1;
     let DownloadRateA1 = req.body.DownloadRateA1;
     let UploadRateA1 = req.body.UploadRateA1;
     let NumUsersA2 = req.body.NumUsersA2;
     let DownloadRateA2 = req.body.DownloadRateA2;
     let UploadRateA2 = req.body.UploadRateA2;
     let NumUsersA3 = req.body.NumUsersA3;
     let DownloadRateA3 = req.body.DownloadRateA3;
     let UploadRateA3 = req.body.UploadRateA3;
     let NumUsersA4 = req.body.NumUsersA4;
     let DownloadRateA4 = req.body.DownloadRateA4;
     let UploadRateA4 = req.body.UploadRateA4;
     let NumUsersA5 = req.body.NumUsersA5;
     let DownloadRateA5 = req.body.DownloadRateA5;
     let UploadRateA5 = req.body.UploadRateA5;
     let LatOLT = req.body.LatOLT;
     let LongOLT = req.body.LongOLT;
     let LatSplit = req.body.LatSplit;
     let LongSplit = req.body.LongSplit;
     let LatU1 = req.body.LatU1;
     let LongU1 = req.body.LongU1;
     let LatU2 = req.body.LatU2;
     let LongU2 = req.body.LongU2;
     let LatU3 = req.body.LatU3;
     let LongU3 = req.body.LongU3;
     let LatU4 = req.body.LatU4;
     let LongU4 = req.body.LongU4;
     let LatU5 = req.body.LatU5;
     let LongU5 = req.body.LongU5;
     let connectorlossfib = req.body.connectorlossfib;
     let NumConOS = req.body.NumConOS;
     let NumConSU1 = req.body.NumConSU1;
     let NumConSU2 = req.body.NumConSU2;
     let NumConSU3 = req.body.NumConSU3;
     let NumConSU4 = req.body.NumConSU4;
     let NumConSU5 = req.body.NumConSU5;
     let Attenfib = req.body.Attenfib;
     let NumSplOS = req.body.NumSplOS;
     let NumSplU1 = req.body.NumSplU1;
     let NumSplU2 = req.body.NumSplU2;
     let NumSplU3 = req.body.NumSplU3;
     let NumSplU4 = req.body.NumSplU4;
     let NumSplU5 = req.body.NumSplU5;
     let SpliceLossfib = req.body.SpliceLossfib;
     let splitratio = req.body.splitratio;
     let insersionLossU1 = req.body.insersionLossU1;
     let insersionLossU2 = req.body.insersionLossU2;
     let insersionLossU3 = req.body.insersionLossU3;
     let insersionLossU4 = req.body.insersionLossU4;
     let insersionLossU5 = req.body.insersionLossU5;
     let FibreDispersion = req.body.FibreDispersion;
     

     // LatU3 = 0;
     // LongU3 = 0;
     // SU3length = 0;
    // let OSlength = req.body.OSlength;
    // let fibrelengthU1 = req.body.fibrelengthU1;
     const n1 = Number(NumUsersA1);
     const n2 = Number(DownloadRateA1);
     const u1 = Number(UploadRateA1);
     const b1 = Number(NumUsersA2);
     const b2 = Number(DownloadRateA2);
     const u2 = Number(UploadRateA2);
     const b3 = Number(NumUsersA3);
     const b4 = Number(DownloadRateA3);
     const u3 = Number(UploadRateA3);
     const b5 = Number(NumUsersA4);
     const b6 = Number(DownloadRateA4);
     const u4 = Number(UploadRateA4);
     const b7 = Number(NumUsersA5);
     const b8 = Number(DownloadRateA5);
     const u5 = Number(UploadRateA5);
     const n3 = Number(LatOLT);
     const n4 = Number(LongOLT);
     const n5 = Number(LatSplit);
     const n6 = Number(LongSplit);
     const n7 = Number(LatU1);
     const n8 = Number(LongU1);
     const n9 = Number(LatU2);
     const n10 = Number(LongU2);
     const n11 = Number(LatU3);
     const n12 = Number(LongU3);
     const n13 = Number(LatU4);
     const n14 = Number(LongU4);
     const n15 = Number(LatU5);
     const n16 = Number(LongU5);
     const c1 = Number(connectorlossfib);
     const c2 = Number(NumConOS);
     const c3 = Number(NumConSU1);
     const c4 = Number(NumConSU2);
     const c5 = Number(NumConSU3);
     const c6 = Number(NumConSU4);
     const c7 = Number(NumConSU5);
     const a1 = Number(Attenfib);
     const s1 = Number(NumSplOS);
     const s2 = Number(NumSplU1);
     const s4 = Number(NumSplU2);
     const s5 = Number(NumSplU3);
     const s6 = Number(NumSplU4);
     const s7 = Number(NumSplU5);
     const s3 = Number(SpliceLossfib);
     const sr1 = Number(splitratio);
     const i1 = Number(insersionLossU1);
     const i2 = Number(insersionLossU2);
     const i3 = Number(insersionLossU3);
     const i4 = Number(insersionLossU4);
     const i5 = Number(insersionLossU5);
     const d1 = Number(FibreDispersion);
     //const n9 = Number(OSlength);
     //const a1 = Number(fibrelengthU1);
     //const a = 0;
    // const b = 0;
   // const n7 = 0;
    let linkdesigns = new linkDesign({
      // TotalBandwidth: req.body.TotalBandwidth,
      Name: req.body.Name,
        NumUsersA1: req.body.NumUsersA1,
        DownloadRateA1:  req.body.DownloadRateA1,
        UploadRateA1:  req.body.UploadRateA1,
        NumUsersA2: req.body.NumUsersA2,
        DownloadRateA2:  req.body.DownloadRateA2,
        UploadRateA2:  req.body.UploadRateA2,
        NumUsersA3: req.body.NumUsersA3,
        DownloadRateA3:  req.body.DownloadRateA3,
        UploadRateA3:  req.body.UploadRateA3,
        NumUsersA4: req.body.NumUsersA4,
        DownloadRateA4:  req.body.DownloadRateA4,
        UploadRateA4:  req.body.UploadRateA4,
        NumUsersA5: req.body.NumUsersA5,
        DownloadRateA5:  req.body.DownloadRateA5,
        UploadRateA5:  req.body.UploadRateA5,
        LatOLT: req.body.LatOLT,
        LongOLT: req.body.LongOLT,
        LatSplit: req.body.LatSplit,
        LongSplit: req.body.LongSplit,
        LatU1: req.body.LatU1,
        LongU1: req.body.LongU1,
        LatU2: req.body.LatU2,
        LongU2: req.body.LongU2,
        LatU3: req.body.LatU3,
        LongU3: req.body.LongU3,
        LatU4: req.body.LatU4,
        LongU4: req.body.LongU4,
        LatU5: req.body.LatU5,
        LongU5: req.body.LongU5,
        connectorlossfib: req.body.connectorlossfib,
        NumConOS: req.body.NumConOS,
        NumConSU1: req.body.NumConSU1,
        NumConSU2: req.body.NumConSU2,
        NumConSU3: req.body.NumConSU3,
        NumConSU4: req.body.NumConSU4,
        NumConSU5: req.body.NumConSU5,
        Attenfib: req.body.Attenfib,
        NumSplOS: req.body.NumSplOS,
        NumSplU1: req.body.NumSplU1,
        NumSplU2: req.body.NumSplU2,
        NumSplU3: req.body.NumSplU3,
        NumSplU4: req.body.NumSplU4,
        NumSplU5: req.body.NumSplU5,
        SpliceLossfib: req.body.SpliceLossfib,
        splitratio: req.body.splitratio,
        insersionLossU1: req.body.insersionLossU1,
        insersionLossU2: req.body.insersionLossU2,
        insersionLossU3: req.body.insersionLossU3,
        insersionLossU4: req.body.insersionLossU4,
        insersionLossU5: req.body.insersionLossU5,
        FibreDispersion: req.body.FibreDispersion,

       // OSlength: req.body.OSlength,
       // const n1 = Number(NumUsers),
       // let n2: Number(SpeedUsersneed),
      //  let TotalBandwidth = n1 + n2,
       n1: Number(NumUsersA1),
       n2: Number(DownloadRateA1),
       u1: Number(UploadRateA1),
       b1: Number(NumUsersA2),
       b2: Number(DownloadRateA2),
       u2: Number(UploadRateA2),
       b3: Number(NumUsersA3),
       b4: Number(DownloadRateA3),
       u3: Number(UploadRateA3),
       b5: Number(NumUsersA4),
       b6: Number(DownloadRateA4),
       u4: Number(UploadRateA4),
       b7: Number(NumUsersA5),
       b8: Number(DownloadRateA5),
       u5: Number(UploadRateA5),
       n3: Number(LatOLT), //x1
       n4: Number(LongOLT), //y1
       n5: Number(LatSplit), //x2
       n6: Number(LongSplit), //y2
       n7: Number(LatU1),// xu1
       n8: Number(LongU1), //yu1
       n9: Number(LatU2),// xu2
       n10: Number(LongU2), //yu2
       n11: Number(LatU3),// xu3
       n12: Number(LongU3), //yu3
       n13: Number(LatU4),// xu4
       n14: Number(LongU4), //yu4
       n15: Number(LatU5),// xu4
       n16: Number(LongU5), //yu4
        c1: Number(connectorlossfib),
        c2: Number(NumConOS),
        c3: Number(NumConSU1),
        c4: Number(NumConSU2),
        c5: Number(NumConSU3),
        c6: Number(NumConSU4),
        c7: Number(NumConSU5),
        a1: Number(Attenfib),
        s1: Number(NumSplOS),
        s2: Number(NumSplU1),
        s4: Number(NumSplU2),
        s5: Number(NumSplU3),
        s6: Number(NumSplU4),
        s7: Number(NumSplU5),
        s3: Number(SpliceLossfib),
        sr1: Number(splitratio),
        i1: Number(insersionLossU1),
        i2: Number(insersionLossU2),
        i3: Number(insersionLossU3),
        i4: Number(insersionLossU4),
        i5: Number(insersionLossU5),
        d1: Number(FibreDispersion),
      // n9: Number(OSlength),
       TotalBandwidthdownA1 : n1 * n2,
       TotalBandwidthdownA2 : b1 * b2,
       TotalBandwidthdownA3 : b3 * b4,
       TotalBandwidthdownA4 : b5 * b6,
       TotalBandwidthdownA5 : b7 * b8,
       TotalBandwidthupA1 : n1 * u1,
       TotalBandwidthupA2 : b1 * u2,
       TotalBandwidthupA3 : b3 * u3,
       TotalBandwidthupA4 : b5 * u4,
       TotalBandwidthupA5 : b7 * u5,
       TotalBandwidthDown: (n1 * n2) + (b1 * b2) + (b3 * b4) + (b5 * b6) + (b7 * b8),
       TotalBandwidthUp: (n1 * u1) + ( b1 * u2) + (b3 * u3) + (b5 * u4) + (b7 * u5),
       
      // n7: Number(n3 + n4),
       
      // fibrelenght: Math.acos(n3)
     // fibrelenght: n3 + n4 + n5 + n6

     //Lengths of fibre caclulation 
      OSlength: 6378.8*(Math.acos((Math.sin(n3)*Math.sin(n5))+ (Math.cos(n3)*Math.cos(n5)*Math.cos(n6-n4)) )),
      SU1length: 6378.8*(Math.acos((Math.sin(n5)*Math.sin(n7))+ (Math.cos(n5)*Math.cos(n7)*Math.cos(n8-n6)) )),
      SU2length: 6378.8*(Math.acos((Math.sin(n5)*Math.sin(n9))+ (Math.cos(n5)*Math.cos(n9)*Math.cos(n10-n6)) )),

      SU3length: 6378.8*(Math.acos((Math.sin(n5)*Math.sin(n11))+ (Math.cos(n5)*Math.cos(n11)*Math.cos(n12-n6)) )),
      SU4length: 6378.8*(Math.acos((Math.sin(n5)*Math.sin(n13))+ (Math.cos(n5)*Math.cos(n13)*Math.cos(n14-n6)) )),
      SU5length: 6378.8*(Math.acos((Math.sin(n5)*Math.sin(n15))+ (Math.cos(n5)*Math.cos(n15)*Math.cos(n16-n6)) )),
      // SU3length: n11,
      fibrelengthU1: 6378.8*(Math.acos((Math.sin(n3)*Math.sin(n5))+ (Math.cos(n3)*Math.cos(n5)*Math.cos(n6-n4)) )) +  6378.8*(Math.acos((Math.sin(n5)*Math.sin(n7))+ (Math.cos(n5)*Math.cos(n7)*Math.cos(n8-n6)) )),
      fibrelengthU2: 6378.8*(Math.acos((Math.sin(n3)*Math.sin(n5))+ (Math.cos(n3)*Math.cos(n5)*Math.cos(n6-n4)) )) +  6378.8*(Math.acos((Math.sin(n5)*Math.sin(n9))+ (Math.cos(n5)*Math.cos(n9)*Math.cos(n10-n6)) )),

      fibrelengthU3: 6378.8*(Math.acos((Math.sin(n3)*Math.sin(n5))+ (Math.cos(n3)*Math.cos(n5)*Math.cos(n6-n4)) )) +   6378.8*(Math.acos((Math.sin(n5)*Math.sin(n11))+ (Math.cos(n5)*Math.cos(n11)*Math.cos(n12-n6)) )),
      fibrelengthU4: 6378.8*(Math.acos((Math.sin(n3)*Math.sin(n5))+ (Math.cos(n3)*Math.cos(n5)*Math.cos(n6-n4)) )) +  6378.8*(Math.acos((Math.sin(n5)*Math.sin(n13))+ (Math.cos(n5)*Math.cos(n13)*Math.cos(n14-n6)) )),
      fibrelengthU5: 6378.8*(Math.acos((Math.sin(n3)*Math.sin(n5))+ (Math.cos(n3)*Math.cos(n5)*Math.cos(n6-n4)) )) + 6378.8*(Math.acos((Math.sin(n5)*Math.sin(n15))+ (Math.cos(n5)*Math.cos(n15)*Math.cos(n16-n6)) )),
      //Connector Loss Calculation
      ConLossU1: (c1*(c2 + c3)),

      ConLossU2: c1*(c2 + c4),

      ConLossU3: c1*(c2 + c5),

      ConLossU4: c1*(c2 + c6),

      ConLossU5: c1*(c2 + c7),

      //Attenuation Loss Calculation
      AttenuationLossU1: a1*(6378.8*(Math.acos((Math.sin(n3)*Math.sin(n5))+ (Math.cos(n3)*Math.cos(n5)*Math.cos(n6-n4)) )) +  6378.8*(Math.acos((Math.sin(n5)*Math.sin(n7))+ (Math.cos(n5)*Math.cos(n7)*Math.cos(n8-n6)) ))),
      
      AttenuationLossU2: a1*(6378.8*(Math.acos((Math.sin(n3)*Math.sin(n5))+ (Math.cos(n3)*Math.cos(n5)*Math.cos(n6-n4)) )) +  6378.8*(Math.acos((Math.sin(n5)*Math.sin(n9))+ (Math.cos(n5)*Math.cos(n9)*Math.cos(n10-n6)) ))),
      
      AttenuationLossU3: a1*(6378.8*(Math.acos((Math.sin(n3)*Math.sin(n5))+ (Math.cos(n3)*Math.cos(n5)*Math.cos(n6-n4)) )) +   6378.8*(Math.acos((Math.sin(n5)*Math.sin(n11))+ (Math.cos(n5)*Math.cos(n11)*Math.cos(n12-n6)) ))),
     
      AttenuationLossU4: a1*(6378.8*(Math.acos((Math.sin(n3)*Math.sin(n5))+ (Math.cos(n3)*Math.cos(n5)*Math.cos(n6-n4)) )) +  6378.8*(Math.acos((Math.sin(n5)*Math.sin(n13))+ (Math.cos(n5)*Math.cos(n13)*Math.cos(n14-n6)) ))),
     
      AttenuationLossU5: a1*(6378.8*(Math.acos((Math.sin(n3)*Math.sin(n5))+ (Math.cos(n3)*Math.cos(n5)*Math.cos(n6-n4)) )) + 6378.8*(Math.acos((Math.sin(n5)*Math.sin(n15))+ (Math.cos(n5)*Math.cos(n15)*Math.cos(n16-n6)) ))),
      //splice loss
      splicelossU1: s3*(s1 + s2),

      splicelossU2: s3*(s1 + s4),

      splicelossU3: s3*(s1 + s5),

      splicelossU4: s3*(s1 + s6),

      splicelossU5: s3*(s1 + s7),

     // splitter loss
    
        splitterLossU1: 10*Math.log10(sr1),

        //Total loss for user 1
         
        TotalLossU1: (c1*(c2 + c3)) + (a1*(6378.8*(Math.acos((Math.sin(n3)*Math.sin(n5))+ (Math.cos(n3)*Math.cos(n5)*Math.cos(n6-n4)) )) +  6378.8*(Math.acos((Math.sin(n5)*Math.sin(n7))+ (Math.cos(n5)*Math.cos(n7)*Math.cos(n8-n6)) )))) + (s3*(s1 + s2)) +(10*Math.log10(sr1)) + i1,
          
        TotalLossU2: (c1*(c2 + c4)) + (a1*(6378.8*(Math.acos((Math.sin(n3)*Math.sin(n5))+ (Math.cos(n3)*Math.cos(n5)*Math.cos(n6-n4)) )) +  6378.8*(Math.acos((Math.sin(n5)*Math.sin(n9))+ (Math.cos(n5)*Math.cos(n9)*Math.cos(n10-n6)) )))) + (s3*(s1 + s4)) + (10*Math.log10(sr1)) +i2,

        TotalLossU3: (c1*(c2 + c5)) + (a1*(6378.8*(Math.acos((Math.sin(n3)*Math.sin(n5))+ (Math.cos(n3)*Math.cos(n5)*Math.cos(n6-n4)) )) +   6378.8*(Math.acos((Math.sin(n5)*Math.sin(n11))+ (Math.cos(n5)*Math.cos(n11)*Math.cos(n12-n6)) )))) + (s3*(s1 + s5)) + (10*Math.log10(sr1)) + i3,

        TotalLossU4: (c1*(c2 + c6)) + (a1*(6378.8*(Math.acos((Math.sin(n3)*Math.sin(n5))+ (Math.cos(n3)*Math.cos(n5)*Math.cos(n6-n4)) )) +  6378.8*(Math.acos((Math.sin(n5)*Math.sin(n13))+ (Math.cos(n5)*Math.cos(n13)*Math.cos(n14-n6)) )))) + (s3*(s1 + s6)) + (10*Math.log10(sr1)) + i4,
      
        TotalLossU5: (c1*(c2 + c7)) + (a1*(6378.8*(Math.acos((Math.sin(n3)*Math.sin(n5))+ (Math.cos(n3)*Math.cos(n5)*Math.cos(n6-n4)) )) + 6378.8*(Math.acos((Math.sin(n5)*Math.sin(n15))+ (Math.cos(n5)*Math.cos(n15)*Math.cos(n16-n6)) )))) + (s3*(s1 + s7)) + (10*Math.log10(sr1)) + i5,
        
        OSdispersion: d1 * (6378.8*(Math.acos((Math.sin(n3)*Math.sin(n5))+ (Math.cos(n3)*Math.cos(n5)*Math.cos(n6-n4)) ))),

        U1dispersion: d1 * (6378.8*(Math.acos((Math.sin(n5)*Math.sin(n7))+ (Math.cos(n5)*Math.cos(n7)*Math.cos(n8-n6)) ))),

        U2dispersion: d1 * (6378.8*(Math.acos((Math.sin(n5)*Math.sin(n9))+ (Math.cos(n5)*Math.cos(n9)*Math.cos(n10-n6)) ))),

        U3dispersion: d1 * (6378.8*(Math.acos((Math.sin(n5)*Math.sin(n11))+ (Math.cos(n5)*Math.cos(n11)*Math.cos(n12-n6)) ))),
        
        U4dispersion: d1 * (6378.8*(Math.acos((Math.sin(n5)*Math.sin(n13))+ (Math.cos(n5)*Math.cos(n13)*Math.cos(n14-n6)) ))),

        U5dispersion: d1 * ( 6378.8*(Math.acos((Math.sin(n5)*Math.sin(n15))+ (Math.cos(n5)*Math.cos(n15)*Math.cos(n16-n6)) )))
        
        //  fibrelengthU1: OSlength + SU1length

     // let  a: Number(OSlength),
     //  b: Number(SU1length),

      
    
      //fibrelengthU1: a + b
      
      
        
        
    });

   // let NumUsers = req.body.NumUsers;
    // let SpeedUsersneed = req.body.SpeedUsersneed;
    //let TotalBandwidth = req.body.TotalBandwidth;

   // const n1 = Number(NumUsers);
   // const n2 = Number(SpeedUsersneed);
   // TotalBandwidth = n1 * n2;

    linkdesigns.save().then(createdLinkDeisgn=>{
        res.send(createdLinkDeisgn);
        res.status(201).json({
            message: "LinkDeisgn successfully added.",
        
        });
    });
});

router.get("/api/linkDesigns",(req,res,next)=>{
    linkDesign.find().then(documents=>{ res.send(documents),
        res.status(201).json({
            message: "linkdesigns fetched successfully!",
            
           
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