const BicycleRequest = require('./bicycleRequestModel')
const Product = require('../bicycle/bicycleModel')
const helper = require('../../utilities/helpers')
const Bicycle = require('../bicycle/bicycleModel')

exports.getAll = async (req, resp) => {
    await BicycleRequest.find(req.body)
        .populate("bicycleId")
        .populate("hirerId")
        .populate("renterId")
        .sort({ "createdAt": -1 })
        .then(res => {
            resp.send({ success: true, status: 200, message: "All BicycleRequests loaded", data: res })
        }).catch(err => {
            resp.send({ success: false, status: 500, message: !!err.message ? err.message : err })
        })
}



exports.getSingle = async (req, resp) => {
    let formData = req.body
    let validation = ""
    if (!formData._id)
        validation += "_id is required"

    if (!!validation)
        resp.send({ success: false, status: 422, message: validation })
    else {
        let query = { _id: formData._id }
        await BicycleRequest.findOne(query)
            .populate("bicycleId")
            .populate("hirerId")
            .populate("renterId")
            .then(res => {
                if (!!res) {
                    resp.send({ success: true, status: 200, message: "BicycleRequest loaded Successfully", data: res })
                }
                else
                    resp.send({ success: false, status: 404, message: "No BicycleRequest Found" })
            }).catch(err => {
                resp.send({ success: false, status: 500, message: !!err.message ? err.message : err })
            })
    }


}



exports.addBicycleRequest = async (req, resp) => {
    let formData = req.body
    let validation = ""

    if (!formData.bicycleId)
        validation += "bicycleId is required,"
    if (!formData.hirerId)
        validation += "hirerId is required,"

    if (!formData.startDateTime)
        validation += "startDateTime is required,"
    if (!formData.numOfHours)
        validation += "numOfHours is required,"

    if (!!validation)
        resp.send({ success: false, status: 422, message: validation })
    else {

        let bicycleData = await Bicycle.findOne({ _id: formData.bicycleId })
        if (bicycleData == null) {
            resp.send({ success: false, status: 404, message: "No bicycle Found" })
        } else if ((new Date(formData.startDateTime)) < (new Date())) {
            resp.send({ success: false, status: 404, message: "Cannot book for past time" })
        }
        else {
            let total = await BicycleRequest.countDocuments()

            let BicycleRequestData = {
                requestId: total + 1,
                pricePerHour: bicycleData.pricePerHour,
                numOfHours: formData.numOfHours,
                amountTotal: bicycleData.pricePerHour * formData.numOfHours,
                bicycleId: formData.bicycleId,
                hirerId: formData.hirerId,
                renterId: bicycleData.userId,
                startDateTime: formData.startDateTime
            }
            let bicycleRequest = new BicycleRequest(BicycleRequestData)
            bicycleRequest.save().then(res => {
                resp.send({ success: true, status: 200, message: "BicycleRequest added Successfully", data: res })

            }).catch(err => {
                resp.send({ success: false, status: 500, message: !!err.message ? err.message : err })
            })

        }
    }
}



exports.updateBicycleRequest = async (req, resp) => {
    // if (!!req.decoded && req.decoded.userType == 2) {
    //     resp.send({ success: false, status: 404, message: "Unauthorized access" })
    // } else {
    let formData = req.body
    let validation = ""
    if (!formData._id)
        validation += "_id is required"
    if ((formData.requestStatus == 2 || formData.requestStatus == '2') && (!formData.pickUpPoint && !formData.pickUpDescription))
        validation += "pickUpPoint and pickUpDescription is required"
    if (!!validation)
        resp.send({ success: false, status: 422, message: validation })
    else {
        let query = { _id: formData._id }
        await BicycleRequest.findOne(query).then(async res => {
            if (!!res) {
                let isInValid = false
                if (!!formData.requestStatus) {
                    if (formData.requestStatus == 4 && res.requestStatus > 1) {
                        isInValid = true
                    } else {
                        res.requestStatus = formData.requestStatus
                    }
                }
                if (res.requestStatus == 2) {
                    if (!!formData.pickUpPoint)
                        res.pickUpPoint = formData.pickUpPoint
                    if (!!formData.pickUpDescription)
                        res.pickUpDescription = formData.pickUpDescription
                }
                if (isInValid)
                    resp.send({ success: true, status: 200, message: "BicycleRequest cannot be cancelled" })
                else
                    res.save().then(res => {
                        resp.send({ success: true, status: 200, message: "BicycleRequest updated Successfully", data: res })

                    }).catch(err => {
                        resp.send({ success: false, status: 500, message: !!err.message ? err.message : err })
                    })
            }
            else
                resp.send({ success: false, status: 404, message: "No BicycleRequest Found" })
        }).catch(err => {
            resp.send({ success: false, status: 500, message: !!err.message ? err.message : err })
        })
    }
    //   }


}

