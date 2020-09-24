const { User } = require('../models')
const { compare } = require('../helpers/bcrypt')

class LoginControl {
    static home(req,res) {
        const error = req.session.error || null
        delete req.session.error
        res.render('loginForm', {error})
    }

    static postLogin(req, res){
        let { email, password } = req.body
        User.findOne({where:{email}})
            .then((value)=>{
                if(value){
                    if(compare(password, value.password)){
                        req.session.isLogin = true
                        res.redirect(`/user/${value.id}`)
                    }else{
                        req.session.isLogin = false
                        req.session.error = 'Password e-mail Anda salah!'
                        res.redirect('/login')
                    }
                }else{
                    req.session.isLogin = false
                    req.session.error = 'E-mail tidak ditemukan / belum terdaftar, silahkan register terlebih dahulu'
                    res.redirect('/login')
                }
            })
            .catch((err)=>{
                req.session.error = err.message
                res.redirect('/login')
            })
    }

}

module.exports = LoginControl