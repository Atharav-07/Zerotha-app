const {Schema} = require('mongoose');

//Writing a Schema for holdings
const HoldingSchema = new Schema({
    name:{
        type:String ,
        required:true ,
    },
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
});

module.exports =  {HoldingSchema};