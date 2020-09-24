const router = require('express').Router()
const LoginControl = require('../controllers/login')
const { checkLogin, pageLogin } = require('../middleware/login')

router.get('/', pageLogin, LoginControl.home)
router.post('/', LoginControl.postLogin)


module.exports = router