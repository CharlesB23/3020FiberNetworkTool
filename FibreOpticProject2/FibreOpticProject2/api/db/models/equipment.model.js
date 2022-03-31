const mongoose = require('mongoose');

const EquipmentSchema = new mongoose.Schema({
    equipmentName:{
        type: String,
        required: true,
        minlength:1,
        trim: true
    },
    equipmentID:{
        type: String,
        required: true,
        minlength:1,
        trim: true
    },
    LossperConnector: {
        type: Number,
        required: true
    },

    

    SplitterLoss:{
        type: Number,
        required: true,
        
    },
    fibreattenuation:{
        type: Number,
        required: true
       
    },


    _linkDesignsID:{
        type: mongoose.Types.ObjectId,
        required: true
    }
    
    

    
})

const Equipment = mongoose.model('Equipment', EquipmentSchema);

module.exports =  {Equipment}