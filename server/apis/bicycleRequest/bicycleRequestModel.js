const mongoose = require('mongoose')
const bicycleRequestSchema = mongoose.Schema({
    requestId: { type: Number, default: 0 },
    bicycleId: { type: mongoose.Schema.Types.ObjectId, default: null, ref: "bicycle" },
    hirerId: { type: mongoose.Schema.Types.ObjectId, default: null, ref: "user" },
    renterId: { type: mongoose.Schema.Types.ObjectId, default: null, ref: "user" },
    startDateTime: { type: Date, default: null },

    numOfHours: { type: Number, default: 0 },
    pricePerHour: { type: Number, default: 0 },
    amountTotal: { type: Number, default: 0 },
    requestStatus: { type: Number, default: 1 }, // 1-> Pending , 2-> Confirmed ,  3=> Completed, 4=Cancelled


    pickUpPoint: { type: String, default: "" },
    pickUpDescription: { type: String, default: "" },


    createdAt: { type: Date, default: Date.now }

})



const bicycleRequest = module.exports = mongoose.model('bicycleRequest', bicycleRequestSchema)