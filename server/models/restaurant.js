const mongoose = require('mongoose')
const Schema = mongoose.Schema

const restaurantSchema = new Schema({
    name: String,
    cuisine: String,
    borough: String,
    restaurant_id: String,
});

module.exports = mongoose.model('Restaurant', restaurantSchema)