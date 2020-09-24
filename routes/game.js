const router = require('express').Router()
const GameControl = require('../controllers/game')


router.get('/:id/add/:game', GameControl.add)
router.get('/:id/delete/:game', GameControl.delete)
router.get('/:id', GameControl.home)

module.exports = router