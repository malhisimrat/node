const mongoose = require('mongoose')
const contactSchema = mongoose.Schema({
    autoId: { type: Number, default: 0 },
    name: { type: String, default: "" },
    email: { type: String, default: "" },
    subject: { type: String, default: "" },
    message: { type: String, default: "" },
    createdAt: { type: Date, default: Date.now }
})


const contact = module.exports = mongoose.model('contact', contactSchema)
