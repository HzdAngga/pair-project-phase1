const {Game, User} = require('../models')

class UserControl {
    static home(req,res) {
        let id = req.params.id
        User.findByPk(id, {
            include: Game
        })
        .then(data => res.render('userHome', { id, data}))
        .catch(err => res.send(err))
    }
}

module.exports = UserControl