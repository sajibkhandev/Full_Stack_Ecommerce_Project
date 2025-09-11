const express =require('express')
const registrationController = require('../../controllers/registrationController')
const otpController = require('../../controllers/otpController')
const secureApi = require('../../middlewer/Secureapi')



const _ =express.Router()

_.post('/registration',secureApi,registrationController)
_.post('/otp',otpController)

module.exports=_