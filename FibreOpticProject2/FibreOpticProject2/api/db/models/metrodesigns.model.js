const mongoose = require('mongoose');

const metrodesignsSchema = mongoose.Schema({

    Name: { type: String, required: true},

    TotalDistance: { type: Number, required: true},

    site1lat: { type: Number, required: true},

    site1long: { type: Number, required: true},

    cenlat: { type: Number, required: true},

    cenlong: { type: Number, required: true},

    ConnectorLoss: { type: Number, required: true},

    NumCons: { type: Number, required: true},

    Confib: { type: Number, required: true},

    AttenuationLoss: { type: Number, required: true},

    AttenFib: { type: Number, required: true},

    SpliceLoss: { type: Number, required: true},

    NumSplices: { type: Number, required: true},

    RecievedPower: { type: Number, required: true},

    TransmittedPower: { type: Number, required: true},

    Dispersion: { type: Number, required: true},

    DisFib: { type: Number, required: true}





   

    
    
});

//const Standards = mongoose.model('Standards', StandardsSchema);
module.exports = mongoose.model("Metrodesigns", metrodesignsSchema); //subdesigns - collection name