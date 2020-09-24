const router = require('express').Router()
const RegisterControl = require('../controllers/register')

router.get('/', RegisterControl.home)
router.post('/', RegisterControl.postAddForm)

module.exports = router