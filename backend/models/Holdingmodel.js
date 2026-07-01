const {model} = require('mongoose');

const {HoldingSchema} = require("../schemas/HoldingSchema");

const Holdingmodel = model("holding" , HoldingSchema);

module.exports = {Holdingmodel};