const router = require('express').Router()
const RegisterControl = require('../controllers/register')

router.get('/', RegisterControl.home)

module.exports = router