function sellerMiddleware(req, res, next){

    if(!req.session.userLogged || req.session.userLogged.categoria === 'cliente'){
        return res.redirect('/user/login');
    }

    next();
}

module.exports = sellerMiddleware;