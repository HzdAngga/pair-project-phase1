const router = require('express').Router()
const UserControl = require('../controllers/user')

router.get('/', UserControl.home)

module.exports = router