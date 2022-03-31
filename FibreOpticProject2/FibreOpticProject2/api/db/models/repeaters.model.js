const mongoose = require('mongoose');

const repeatersSchema = mongoose.Schema({
    Name:{ type: String, required: true,},
  
    DataRate:{ type: Number, required: true },
    
    Wavelength:{ type: String, required: true },

    Power:{ type: Number, required: true },

    Range: { type: Number, required: false, default: 0 },

    Link: { type: String, required: false, default: 0 }

    
    
});

//const Standards = mongoose.model('Standards', StandardsSchema);
module.exports = mongoose.model("Repeater", repeatersSchema); //olt - collection name