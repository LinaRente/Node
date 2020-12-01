const express = require('express');
const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    name: String,
    address: String,
    city: String,
    country: String,
    stars: {
        type: Number,
    },
    cuisine: String,
    priceCategory: {
        type: Number
    }
})

const Restaurant = mongoose.mongoose('Restaurant', restaurantSchema);

module.exports = Restaurant