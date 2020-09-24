const {Game, User} = require('../models')

class UserControl {
    static home(req,res) {
        let id = req.params.id
        let alert = req.query.alert
        User.findByPk(id, {
            include: Game
        })
        .then(data => res.render('userHome', { id, data, alert}))
        .catch(err => res.send(err))
    }
    static editForm(req,res) {
        let error = req.query.error
        let id = req.params.id
        User.findByPk(id)
        .then(data => res.render('editUserForm', { id, data, error }))
        .catch(err => res.send(err))
    }
    static editPost(req,res) {
        let id = req.params.id
        let {firstName, lastName, email} = req.body
        User.update({firstName, lastName, email}, {
            where: {
                id: id
            }
        })
        .then(data => res.redirect(`/user/${id}`))
        .catch(err => {
            res.redirect(`edit?error=Fill all the blank and input correctly, please!`)
    
        })
    }
}

module.exports = UserControl