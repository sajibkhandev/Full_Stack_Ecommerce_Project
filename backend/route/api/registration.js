const express =require('express')
const registrationController = require('../../controllers/registrationController')
const forgetPasswordController = require('../../controllers/forgetPasswordController')
const changePasswordController = require('../../controllers/changePasswordController')
const otpController = require('../../controllers/otpController')
const secureApi = require('../../middlewer/Secureapi')



const _ =express.Router()

_.post('/registration',secureApi,registrationController)
_.post('/otp',otpController)
_.post('/forgetpassword',forgetPasswordController)
_.post('/changepassword',changePasswordController)

module.exports=_