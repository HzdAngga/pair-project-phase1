const router = require('express').Router()
const UserControl = require('../controllers/user')

router.get('/:id', UserControl.home)

module.exports = router