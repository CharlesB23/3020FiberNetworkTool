const mongoose = require('mongoose');

const splittersSchema = mongoose.Schema({
    Name:{ type: String, required: true,},
  
    Wavelength:{ type: String, required: true },
    
    InsersionLoss128:{ type: Number, required: false, default: 0 },

    InsersionLoss64:{ type: Number, required: false, default: 0 },

    InsersionLoss32:{ type: Number, required: false, default: 0 },

    InsersionLoss16:{ type: Number, required: false, default: 0 },

    InsersionLoss8:{ type: Number, required: false, default: 0 },

    InsersionLoss4:{ type: Number, required: false, default: 0 },

    InsersionLoss2:{ type: Number, required: false, default: 0 },

    Polarization128:{ type: Number, required: false, default: 0 },

    Polarization64:{ type: Number, required: false, default: 0 },

    Polarization32:{ type: Number, required: false, default: 0 },

    Polarization16:{ type: Number, required: false, default: 0 },

    Polarization8:{ type: Number, required: false, default: 0 },

    Polarization4:{ type: Number, required: false, default: 0 },

    Polarization2:{ type: Number, required: false, default: 0 },

    MaxPower:{ type: Number, required: true },

    SplitRatio: { type: Number, required: true },

    Link:{ type: String, required: false, default: 0 }



    
    
});

//const Standards = mongoose.model('Standards', StandardsSchema);
module.exports = mongoose.model("Splitter", splittersSchema); //olt - collection name