const Bicycle = require('./bicycleModel')
const helper = require('../../utilities/helpers')


exports.getAll = async (req, resp) => {

    req.body.isDelete = false
    await Bicycle.find(req.body)
        .populate("userId")
        .then(res => {
            resp.send({ success: true, status: 200, message: "All Bicycles loaded", data: res })
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
        await Bicycle.findOne(query)
            .populate("userId").then(res => {
                if (!!res) {
                    resp.send({ success: true, status: 200, message: "Bicycle loaded Successfully", data: res })
                }
                else
                    resp.send({ success: false, status: 404, message: "No Bicycle Found" })
            }).catch(err => {
                resp.send({ success: false, status: 500, message: !!err.message ? err.message : err })
            })
    }


}



exports.addBicycle = async (req, resp) => {
    let decoded = req.decoded
    let formData = req.body
    console.log("formData", formData)
    let validation = ""
    if (!formData.description)
        validation += "description is required,"
    if (!formData.image)
        validation += "image is required,"
    if (!formData.bikeType)
        validation += "bikeType is required,"
    if (!formData.pricePerHour)
        validation += "pricePerHour is required,"
    if (!formData.location)
        validation += "location is required,"
    if (!formData.userId)
        validation += "userId is required,"
    if (decoded.userType == 3)
        resp.send({ success: false, status: 403, message: "Cannot add bicycle" })
    else if (!!validation)
        resp.send({ success: false, status: 422, message: validation })
    else {
        let total = await Bicycle.countDocuments()
        let BicycleData = {
            autoId: total + 1,
            pricePerHour: formData.pricePerHour,
            description: formData.description,
            location: formData.location,
            bikeType: formData.bikeType,
            userId: formData.userId,
            image: "bicycle/" + formData.image
        }
        let bicycle = new Bicycle(BicycleData)
        // let prevBicycle = await Bicycle.findOne({ name: formData.name })
        // if (prevBicycle)
        //     resp.send({ success: false, status: 409, message: "Bicycle already exists with same name" })
        // else
        bicycle.save().then(res => {
            resp.send({ success: true, status: 200, message: "Bicycle added Successfully", data: res })

        }).catch(err => {
            resp.send({ success: false, status: 500, message: !!err.message ? err.message : err })
        })
    }
}



exports.updateBicycle = async (req, resp) => {
    let formData = req.body
    let validation = ""
    if (!formData._id)
        validation += "_id is required"
    if (!!validation)
        resp.send({ success: false, status: 422, message: validation })
    else {
        let query = { _id: formData._id }
        await Bicycle.findOne(query).then(async res => {
            if (!!res) {
                if (!!formData.description)
                    res.description = formData.description
                if (!!formData.image)
                    res.image = "bicycle/" + formData.image
                if (!!formData.bikeType)
                    res.bikeType = formData.bikeType
                if (!!formData.pricePerHour)
                    res.pricePerHour = formData.pricePerHour
                if (!!formData.location)
                    res.location = formData.location
                if (!!formData.userId)
                    res.userId = formData.userId
                if (!!formData.status)
                    res.status = formData.status
                let id = res._id
                // let prevBicycle = await Bicycle.findOne({ $and: [{ name: res.name }, { _id: { $ne: id } }] })
                // if (prevBicycle)
                //     resp.send({ success: false, status: 409, message: "Bicycle already exists with same name" })
                // else
                res.save().then(res => {
                    resp.send({ success: true, status: 200, message: "Bicycle updated Successfully", data: res })

                }).catch(err => {
                    resp.send({ success: false, status: 500, message: !!err.message ? err.message : err })
                })
            }
            else
                resp.send({ success: false, status: 404, message: "No Bicycle Found" })
        }).catch(err => {
            resp.send({ success: false, status: 500, message: !!err.message ? err.message : err })
        })
    }
}

exports.deleteBicycle = async (req, resp) => {
    let formData = req.body
    let validation = ""
    if (!formData._id)
        validation += "_id is required"
    if (!!validation)
        resp.send({ success: false, status: 422, message: validation })
    else {
        let query = { _id: formData._id }
        await Bicycle.findOne(query).then(async res => {
            if (!!res) {
                res.isDelete = true
                res.save().then(res => {
                    resp.send({ success: true, status: 200, message: "Bicycle updated Successfully" })

                }).catch(err => {
                    resp.send({ success: false, status: 500, message: !!err.message ? err.message : err })
                })
            }
            else
                resp.send({ success: false, status: 404, message: "No Bicycle Found" })
        }).catch(err => {
            resp.send({ success: false, status: 500, message: !!err.message ? err.message : err })
        })
    }
}

