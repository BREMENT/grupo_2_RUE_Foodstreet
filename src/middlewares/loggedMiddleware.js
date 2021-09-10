function loggedMiddleware(req, res, next){
    if(req.session.userLogged){
        res.redirect('/');
    }

    next();
}

module.exports = loggedMiddleware;