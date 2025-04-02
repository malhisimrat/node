const Contact = require('./contactModel')
const helper = require('../../utilities/helpers')


exports.getAll = async (req, resp) => {

    await Contact.find(req.body)

        .then(res => {
            resp.send({ success: true, status: 200, message: "All Contacts loaded", data: res })
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
        await Contact.findOne(query)
            .then(res => {
                if (!!res) {
                    resp.send({ success: true, status: 200, message: "Contact loaded Successfully", data: res })
                }
                else
                    resp.send({ success: false, status: 404, message: "No Contact Found" })
            }).catch(err => {
                resp.send({ success: false, status: 500, message: !!err.message ? err.message : err })
            })
    }


}



exports.addContact = async (req, resp) => {
    console.log("here in conatct")
    let formData = req.body

    let validation = ""
    if (!formData.name)
        validation += "name is required,"
    if (!formData.email)
        validation += "email is required,"
    if (!formData.subject)
        validation += "subject is required,"
    if (!formData.message)
        validation += "message is required,"
    if (!!validation)
        resp.send({ success: false, status: 422, message: validation })
    else {
        let total = await Contact.countDocuments()
        let ContactData = {
            autoId: total + 1,
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message
        }
        let contactObj = new Contact(ContactData)

        contactObj.save().then(res => {
            resp.send({ success: true, status: 200, message: "Contact added Successfully", data: res })

        }).catch(err => {
            resp.send({ success: false, status: 500, message: !!err.message ? err.message : err })
        })
    }
}



