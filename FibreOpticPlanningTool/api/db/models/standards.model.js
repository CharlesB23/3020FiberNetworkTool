const mongoose = require('mongoose');

const standardsSchema = mongoose.Schema({
    Name:{ type: String, required: true, trim: true },
  
    DownstreamRate:{ type: Number, required: true },
    
    UpstreamRate:{ type: Number, required: true },

    Splitlimit:{ type: Number, required: true   },

    Reach:{type: Number, required: true },
    
    PowerBudgetMax:{ type: Number,required: true  },
   
    PowerBudgetMin:{ type: Number,required: true },

    Link:  { type: String, required: false, default: 0 },
    
        

    
});

//const Standards = mongoose.model('Standards', StandardsSchema);
module.exports = mongoose.model("Standard", standardsSchema); //standards - collection name

