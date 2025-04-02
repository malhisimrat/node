const mongoose = require('mongoose')
const bicycleSchema = mongoose.Schema({
    autoId: { type: Number, default: 0 },
    bikeType: { type: String, default: "" },
    description: { type: String, default: "" },
    location: { type: String, default: "" },
    pricePerHour: { type: Number, default: 0 },
    image: { type: String, default: "default.png" },
    status: { type: Boolean, default: true },
    isDelete: { type: Boolean, default: false },
    userId: { type: mongoose.Schema.Types.ObjectId, default: null, ref: 'user' },
    createdAt: { type: Date, default: Date.now }
})


const bicycle = module.exports = mongoose.model('bicycle', bicycleSchema)
