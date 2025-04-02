const User = require('../user/userModel')
const Bicycle = require('../bicycle/bicycleModel')
const BicycleRequest = require('../bicycleRequest/bicycleRequestModel')


exports.dashboard = async (req, res) => {
    let totalCustomers = await User.find({ userType: 2 })
    let totalBicycle = await Bicycle.countDocuments()
    let totalBicycleRequests = await BicycleRequest.countDocuments()
    res.send({ success: true, status: 200, totalBicycleRequests: totalBicycleRequests, totalCustomers: totalCustomers.length, totalProducts: totalBicycle })
}

