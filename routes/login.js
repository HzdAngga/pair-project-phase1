const router = require('express').Router()
const LoginControl = require('../controllers/login')

router.get('/', LoginControl.home)

module.exports = router