function sellerMiddleware(req, res, next){

    if(!req.session.userLogged || req.session.userLogged.categoria === 'cliente'){
        return res.redirect('/');
    }

    next();
}

module.exports = sellerMiddleware;