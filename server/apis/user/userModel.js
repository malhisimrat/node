const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    userId: { type: Number, default: 0 },
    name: { type: String, default: "" },
    email: { type: String, default: "" },
    password: { type: String, default: "" },
    contact: { type: String, default: "" },
    idProof_image: { type: String, default: "default.jpg" },
    userType: { type: Number, default: 2 },// 1=> Admin, 2=> Renter , 3=> Hirer
    userStatus: { type: Number, default: 1 }, //1=> Pending , 2=> Approved, 3=> Rejected

    createdAt: { type: Date, default: Date.now }

})


const User = module.exports = mongoose.model('user', userSchema)
