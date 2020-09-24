const { User } = require('../models')
class RegisterControl {
    static home(req,res) {
        const error = req.session.error || null
        delete req.session.error
        res.render('registerForm', {error})
    }

    static postAddForm(req, res){
        let { firstName, lastName, email, password, confirm_password } = req.body
        
        if(password !== confirm_password){
            req.session.error = 'Password dan Confirm Password tidak sesuai!'
            res.redirect('/register')
        }else{
            User.create({ firstName, lastName, email, password })
            .then(()=>{
                res.redirect('/login')
            })
            .catch((err)=>{
                req.session.error = err.message
                res.redirect(`/register`)
            })
        }
        
    }
}

module.exports = RegisterControl