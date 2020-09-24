const router = require('express').Router()
const UserControl = require('../controllers/user')

router.get('/:id/edit', UserControl.editForm)
router.post('/:id/edit', UserControl.editPost)
router.get('/:id', UserControl.home)

module.exports = router