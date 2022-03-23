const mongoose = require('mongoose');

const metrodesignsSchema = mongoose.Schema({

    Name: { type: String, required: true},

    site1lat: { type: Number, required: true},

    site1long: { type: Number, required: true},

    site2lat: { type: Number, required: true},

    site2long: { type: Number, required: true},

    site3lat: { type: Number, required: false, default: 0 },

    site3long: { type: Number, required: false, default: 0 },

    site4lat: { type: Number, required: false, default: 0 },

    site4long: { type: Number, required: false, default: 0 },

    site5lat: { type: Number, required: false, default: 0 },

    site5long: { type: Number, required: false, default: 0 },

    fl12: { type: Number, required: true},

    fl13: { type: Number, required: false, default: 0 },

    fl14: { type: Number, required: false, default: 0 },

    fl15: { type: Number, required: false, default: 0 },

    connectorlossfib: {type: Number, required: true},

    NumConOS:  {type: Number, required: true}, //Number of connectors between the OLT and Splitter

   NumConS1: {type: Number, required: true}, //Number of connectors between the Splitter and User 1

   NumConS2: {type: Number, required: true}, //Number of connectors between the Splitter and User 2

   NumConS3: {type: Number, required: false, default: 0}, //Number of connectors between the Splitter and User 3

   NumConS4: {type: Number, required: false, default: 0}, //Number of connectors between the Splitter and User 4

   NumConS5: {type: Number, required: false, default: 0},

    ConnectorLoss1: { type: Number, required: true},

    ConnectorLoss2: { type: Number, required: true},

    ConnectorLoss3: { type: Number, required: true},

    ConnectorLoss4: { type: Number, required: true},

    ConnectorLoss5: { type: Number, required: true},

    Attenfib: {type: Number, required: true}, //Attenuation of fibre

   AttenuationLoss1: {type: Number, required: true}, //Attenuation loss of user 1 

   AttenuationLoss2: {type: Number, required: true}, //Attenuation loss of user 2 

   AttenuationLoss3: {type: Number, required: false, default: 0}, //Attenuation loss of user 3

   AttenuationLoss4: {type: Number, required: false, default: 0}, //Attenuation loss of user 4

   AttenuationLoss5: {type: Number, required: false, default: 0}, //Attenuation loss of user 5

   SpliceLossfib: {type: Number, required: true}, // splice loss of fibre

   NumSpl1: {type: Number, required: true}, // Number of splices from Splitter to user 1

   NumSpl2: {type: Number, required: true}, // Number of splices from Splitter to user 2

   NumSpl3: {type: Number, required: false, default:0}, // Number of splices from Splitter to user 3

   NumSpl4: {type: Number, required: false, default:0}, // Number of splices from Splitter to user 4

   NumSpl5: {type: Number, required: false, default:0}, 

   spliceloss1: {type: Number, required: true}, // Splice Loss of user 1

   spliceloss2: {type: Number, required: true}, // Splice Loss of user 2

   spliceloss3: {type: Number, required: false, default: 0}, // Splice Loss of user 3

   spliceloss4: {type: Number, required: false, default: 0}, // Splice Loss of user 4

   spliceloss5: {type: Number, required: false, default: 0}, // Splice Loss of user 5

   ReceivedPower:{ type: Number, required: true},

   TransmitterPower:{ type: Number, required: true},




   

    
    
});

//const Standards = mongoose.model('Standards', StandardsSchema);
module.exports = mongoose.model("Metrodesigns", metrodesignsSchema); //subdesigns - collection name