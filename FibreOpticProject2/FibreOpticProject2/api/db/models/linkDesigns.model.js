const mongoose = require('mongoose');

const linkDesignsSchema = new mongoose.Schema({
    Name: { type: String, required: true},

    TotalBandwidthdownA1: { type: Number, required: true }, //Total Bandwidth for first area

    TotalBandwidthdownA2: { type: Number, required: false, default: 0 },

    TotalBandwidthdownA3: { type: Number, required: false, default: 0 },

    TotalBandwidthdownA4: { type: Number, required: false, default: 0 },

    TotalBandwidthdownA5: { type: Number, required: false, default: 0 },

    TotalBandwidthupA1: { type: Number, required: true }, //Total Bandwidth  for first area

    TotalBandwidthupA2: { type: Number, required: false, default: 0 },

    TotalBandwidthupA3: { type: Number, required: false, default: 0 },

    TotalBandwidthupA4: { type: Number, required: false, default: 0 },

    TotalBandwidthupA5: { type: Number, required: false, default: 0 },

    TotalBandwidthDown: { type: Number, required: true }, //Total downstream bandwidth

    TotalBandwidthUp: { type: Number, required: true }, //Total upstream bandwidth


    //TotalBandwidthMul: { type: Number, required: true   },
   
    //TotalBandwidthAdd: { type: Number, required: true },

    NumUsersA1: { type: Number, required: true },

    NumUsersA2: { type: Number, required: false, default: 0 },

    NumUsersA3: { type: Number, required: false, default: 0 },

    NumUsersA4: { type: Number, required: false, default: 0 },

    NumUsersA5: { type: Number, required: false, default: 0 },

    DownloadRateA1: { type: Number, required: true },

    DownloadRateA2: { type: Number, required: false, default: 0 },

    DownloadRateA3: { type: Number, required: false, default: 0 },

    DownloadRateA4: { type: Number, required: false, default: 0 },

    DownloadRateA5: { type: Number, required: false, default: 0 },

    UploadRateA1: { type: Number, required: true },

    UploadRateA2: { type: Number, required: false, default: 0 },

    UploadRateA3: { type: Number, required: false, default: 0 },

    UploadRateA4: { type: Number, required: false, default: 0 },

    UploadRateA5: { type: Number, required: false, default: 0 },

    LatOLT: { type: Number, required: true }, //OLT latitude coordinate

    LongOLT: { type: Number, required: true }, //OLT longitude coordinate

    LatSplit: { type: Number, required: true }, //Splitter latitude coordinate

    LongSplit: { type: Number, required: true }, //Splitter longitude coordinate
    
    LatU1: { type: Number, required: true }, //User 1 latitude coordinate

    LongU1: { type: Number, required: true }, //User 1 longitude coordinate

    LatU2: { type: Number, required: true }, //User 2 latitude coordinate

    LongU2: { type: Number, required: true }, //User 2 longitude coordinate

    LatU3: { type: Number, required: false, default: 0 }, //User 3 latitude coordinate

    LongU3: { type: Number, required: false, default: 0 }, //User 3 longitude coordinate

    LatU4: { type: Number, required: false, default: 0 }, //User 4 latitude coordinate

    LongU4: { type: Number, required: false, default: 0 }, //User 4 longitude coordinate

    LatU5: { type: Number, required: false, default: 0 }, //User 5 latitude coordinate

    LongU5: { type: Number, required: false, default: 0 }, //User 5 longitude coordinate

    OSlength: { type: Number, required: true }, //Length of fibre from OLT to splitter

    SU1length: { type: Number, required: true },//Length of fibre from Splitter to first user

    SU2length: { type: Number, required: true }, //Length of fibre from Splitter to second user

    SU3length: { type: Number, required: false, default: 0 }, //Length of fibre from Splitter to third user

    SU4length: { type: Number, required: false, default: 0 }, //Length of fibre from Splitter to 4th user

    SU5length: { type: Number, required: false, default: 0 }, //Length of fibre from Splitter to 5th user

   fibrelengthU1: { type: Number, required: true }, //Total Length of fibre used for user 1

   fibrelengthU2: { type: Number, required: true }, //Total Length of fibre used for user 2

   fibrelengthU3: { type: Number, required: false, default: 0 }, //Total Length of fibre used for user 3

   fibrelengthU4: { type: Number, required: false, default: 0 }, //Total Length of fibre used for user 4

   fibrelengthU5: { type: Number, required: false, default: 0 }, //Total Length of fibre used for user 5

   connectorlossfib: {type: Number, required: true}, //Connector loss of the fibre

   NumConOS:  {type: Number, required: true}, //Number of connectors between the OLT and Splitter

   NumConSU1: {type: Number, required: true}, //Number of connectors between the Splitter and User 1

   NumConSU2: {type: Number, required: true}, //Number of connectors between the Splitter and User 2

   NumConSU3: {type: Number, required: false, default: 0}, //Number of connectors between the Splitter and User 3

   NumConSU4: {type: Number, required: false, default: 0}, //Number of connectors between the Splitter and User 4

   NumConSU5: {type: Number, required: false, default: 0}, //Number of connectors between the Splitter and User 5

   ConLossU1: {type: Number, required: true}, //The connector loss of user 1

   ConLossU2: {type: Number, required: true}, //The connector loss of user 2

   ConLossU3: {type: Number, required: false, default: 0}, //The connector loss of user 3

   ConLossU4: {type: Number, required: false, default: 0}, //The connector loss of user 4

   ConLossU5: {type: Number, required: false, default: 0}, //The connector loss of user 5

   Attenfib: {type: Number, required: true}, //Attenuation of fibre

   AttenuationLossU1: {type: Number, required: true}, //Attenuation loss of user 1 

   AttenuationLossU2: {type: Number, required: true}, //Attenuation loss of user 2 

   AttenuationLossU3: {type: Number, required: false, default: 0}, //Attenuation loss of user 3

   AttenuationLossU4: {type: Number, required: false, default: 0}, //Attenuation loss of user 4

   AttenuationLossU5: {type: Number, required: false, default: 0}, //Attenuation loss of user 5

   SpliceLossfib: {type: Number, required: true}, // splice loss of fibre

   NumSplOS: {type: Number, required: true}, // Number of splices from OLT to Splitter

   NumSplU1: {type: Number, required: true}, // Number of splices from Splitter to user 1

   NumSplU2: {type: Number, required: true}, // Number of splices from Splitter to user 2

   NumSplU3: {type: Number, required: false, default:0}, // Number of splices from Splitter to user 3

   NumSplU4: {type: Number, required: false, default:0}, // Number of splices from Splitter to user 4

   NumSplU5: {type: Number, required: false, default:0}, // Number of splices from Splitter to user 5

   splicelossU1: {type: Number, required: true}, // Splice Loss of user 1

   splicelossU2: {type: Number, required: true}, // Splice Loss of user 2

   splicelossU3: {type: Number, required: false, default: 0}, // Splice Loss of user 3

   splicelossU4: {type: Number, required: false, default: 0}, // Splice Loss of user 4

   splicelossU5: {type: Number, required: false, default: 0}, // Splice Loss of user 5

   splitratio: {type: Number, required: true}, //The splitter ratio

   splitterLossU1: {type: Number, required: true},

   insersionLossU1: {type: Number, required: false, default: 0}, //Insersion loss for user 1 

   insersionLossU2: {type: Number, required: false, default: 0}, //Insersion loss for user 2

   insersionLossU3: {type: Number, required: false, default: 0}, //Insersion loss for user 3

   insersionLossU4: {type: Number, required: false, default: 0}, //Insersion loss for user 4

   insersionLossU5: {type: Number, required: false, default: 0}, //Insersion loss for user 5

   TotalLossU1: {type: Number, required: true}, //total loss for user 1

   TotalLossU2: {type: Number, required: true}, //total loss for user 2

   TotalLossU3: {type: Number, required: false, default: 0}, ////total loss for user 3

   TotalLossU4: {type: Number, required: false, default: 0}, ////total loss for user 4

   TotalLossU5: {type: Number, required: false, default: 0}, ////total loss for user 5

   FibreDispersion: {type: Number, required: false, default: 0}, // Dispersion of fibre

   OSdispersion:  {type: Number, required: false, default: 0}, // Dispersion from OLT to splitter

   U1dispersion:  {type: Number, required: false, default: 0}, // Dispersion for user 1 

   U2dispersion:  {type: Number, required: false, default: 0}, // Dispersion for user 2

   U3dispersion:  {type: Number, required: false, default: 0}, // Dispersion for user 3 

   U4dispersion:  {type: Number, required: false, default: 0}, // Dispersion for user 4 

   U5dispersion:  {type: Number, required: false, default: 0} // Dispersion for user 5 

  




    
})

//const linkDesigns = mongoose.model('linkDesigns', linkDesignsSchema);
module.exports = mongoose.model("linkDesigns", linkDesignsSchema); //linkDesigns - collection name

//module.exports = {linkDesigns}