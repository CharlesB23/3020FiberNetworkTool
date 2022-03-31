const mongoose = require('mongoose');

const subdesignsSchema = mongoose.Schema({

    Name: { type: String, required: true},

    LatStation1: { type: Number, required: true},

    LongStation1: { type: Number, required: true},

    LatStation2: { type: Number, required: true},

    LongStation2: { type: Number, required: true},

    TotalDistance:{ type: Number, required: true},

    ConnectorLoss: { type: Number, required: true},

    ConnectorLossFib: { type: Number, required: true},

    NumCons: { type: Number, required: true},

    AttenuationLoss: { type: Number, required: true},

    AttenuationFib: { type: Number, required: true},

    SpliceLoss: { type: Number, required: true},

    SpliceFib: { type: Number, required: true},

    NumSplices: { type: Number, required: true},

    ReceivedPower:{ type: Number, required: true},

    TransmitterPower:{ type: Number, required: true},

    ReceiverSensitivity: { type: Number, required: false, default: 0},

    LossLimit:{ type: Number, required: true},

    dispersion: { type: Number, required: false, default: 0},

    dispersionfib: { type: Number, required: false, default: 0},

    NumberofRepeaters:{ type: Number, required: false, default: 0},

   

    
    
});

//const Standards = mongoose.model('Standards', StandardsSchema);
module.exports = mongoose.model("Subdesigns", subdesignsSchema); //subdesigns - collection name