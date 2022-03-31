const mongoose = require('mongoose');

const onusSchema = mongoose.Schema({
    Name:{ type: String, required: true,},
  
    StandardSpec:{ type: String, required: true },
    
    DownstreamRate:{ type: Number, required: true },

    UpstreamRate:{ type: Number, required: true },

    PowerConsumption: { type: Number, required: true },

    Link: { type: String, required: false, default: 0 }

    
    
});

//const Standards = mongoose.model('Standards', StandardsSchema);
module.exports = mongoose.model("Onu", onusSchema); //olt - collection name