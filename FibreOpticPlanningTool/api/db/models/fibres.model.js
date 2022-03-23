const mongoose = require('mongoose');

const fibresSchema = mongoose.Schema({
    Name:{ type: String, required: true,},
  
    FibreAttenuation:{ type: Number, required: true },
    
    FibreConnectorLoss:{ type: Number, required: false, default: 0 },

    FibreDispersion:{ type: Number, required: true   },

    Link: { type: String, required: false, default: 0 },
    
    
});

//const Standards = mongoose.model('Standards', StandardsSchema);
module.exports = mongoose.model("Fibre", fibresSchema); //fibre - collection name