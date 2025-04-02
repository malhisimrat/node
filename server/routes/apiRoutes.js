const router = require('express').Router()
const helper = require('../utilities/helpers')


//controllers
const userController = require('../apis/user/userController')


const bicycleController = require('../apis/bicycle/bicycleController')
const bicycleRequestController = require('../apis/bicycleRequest/bicycleRequestController')
const dashboardController = require('../apis/dashboard/dashboardController')
const contactController = require('../apis/contact/contactController')

//auth
router.post('/user/login', userController.login)
//user
router.post('/user/add', helper.uploadImageFun.single('idProof_image'), userController.addUser)

router.post('/bicycle/all', bicycleController.getAll)
router.post('/bicycle/single', bicycleController.getSingle)

router.post('/contact/add', contactController.addContact)

router.use(require('../middleware/tokenChecker'))

//dashboard
router.get('/dashboard', dashboardController.dashboard)

//user
router.post('/user/renter/all', userController.getAllRenter)
router.post('/user/hirer/all', userController.getAllHirer)
router.post('/user/single', userController.getSingle)

router.post('/user/update', helper.uploadImageFun.single('idProof_image'), userController.updateUser)

//bicycle
router.post('/bicycle/add', helper.uploadImageFun.single('bicycle_image'), bicycleController.addBicycle)
router.post('/bicycle/update', helper.uploadImageFun.single('bicycle_image'), bicycleController.updateBicycle)
router.post('/bicycle/delete', bicycleController.deleteBicycle)

//bicycleRequest
router.post('/bicycleRequest/all', bicycleRequestController.getAll)
router.post('/bicycleRequest/single', bicycleRequestController.getSingle)
router.post('/bicycleRequest/add', bicycleRequestController.addBicycleRequest)
router.post('/bicycleRequest/update', bicycleRequestController.updateBicycleRequest)

//contact
router.post('/contact/all', contactController.getAll)
router.post('/contact/single', contactController.getSingle)



router.all('*', (req, res) => {
    res.send({
        success: false,
        status: 404,
        message: "Invalid Address"
    })
})

module.exports = router