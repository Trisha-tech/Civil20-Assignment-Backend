const mongoose = require('mongoose');
const PlayersSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    score:{
        type:Number,
        required:true
    },
    Designation:{
        data: Buffer,
        contentType: String
    },
    percentage:{
        type:String,
        required:true
    }
},{
    timestamp:true
});

module.exports = mongoose.model('Players',PlayersSchema);