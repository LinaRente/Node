const express = require('express')
const mmongoose = require('mongoose');

const hotelSchema = new mmongoose.Schema({
    name: String,
    address: String,
    city: String,
    country: String,
    stars: { 
        type: Number 
    },
    hasSpa: Boolean,
    hasPool: Boolean,
    priceCategory: {
        type:Number
    },
})

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;