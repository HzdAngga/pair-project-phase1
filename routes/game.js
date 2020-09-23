const router = require('express').Router()
const GameControl = require('../controllers/game')

router.get('/', GameControl.home)

module.exports = router