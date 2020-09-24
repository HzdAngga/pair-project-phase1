const { Game, Subscribe } = require('../models')

class GameControl {
    static home(req,res) {
        let id = req.params.id
        let alert = req.query.alert
        Game.findAll({
            order: [['name', 'ASC']]
        })
            .then(data => res.render('gameHome',{data, id, alert}))
            .catch(err => res.send(err))
    }
    static add(req,res) {
        let user = req.params.id
        let game = req.params.game
        Subscribe.create({
            UserId: user,
            GameId: game
        })
        .then(data => res.redirect(`/game/${user}?alert=You have successfully subscribed a game!`))
        .catch(err => res.send(err))
    }
    static delete(req,res) {
        let user = req.params.id
        let game = req.params.game
        Subscribe.destroy({
            where: {
                UserId: user,
                GameId: game
            }
        })
        .then(data => res.redirect(`/user/${user}?alert=You have removed a game from your cart!`))
        .catch(err => res.send(err))
    }
}

module.exports = GameControl