const router = require('express').Router()
const HomeControl = require('../controllers/home')
const loginRouter = require('./login')
const registerRouter = require('./register')
const gameRouter = require('./game')
const userRouter = require('./user')

router.get('/', HomeControl.home)
router.use('/login', loginRouter)
router.use('/register', registerRouter)
router.use('/game', gameRouter)
router.use('/user', userRouter)

module.exports = router