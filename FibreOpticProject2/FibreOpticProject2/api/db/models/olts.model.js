const mongoose = require('mongoose');

const oltsSchema = mongoose.Schema({
    Name:{ type: String, required: true,},
  
    StandardSpec:{ type: String, required: true },
    
    DownstreamRate:{ type: Number, required: true },

    UpstreamRate:{ type: Number, required: true },

    Splitratio: { type: Number, required: true },

    TotalReach: { type: Number, required: false, default: 0 },

    PowerConsumption: { type: Number, required: true },

    Link: { type: String, required: false, default: 0 }

    
    
});

//const Standards = mongoose.model('Standards', StandardsSchema);
module.exports = mongoose.model("Olt", oltsSchema); //olt - collection name