function checkLogin(req, res, next){
    if(req.session.isLogin){
        next()
    }else{
        req.session.error = 'Access Denied!'
        res.redirect('/login')
    }
}

function pageLogin(req, res, next){
    if(req.session.isLogin){
        res.redirect('/user')
    }else{
        next()
    }
}

module.exports = { checkLogin, pageLogin }