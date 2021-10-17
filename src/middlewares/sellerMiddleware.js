function sellerMiddleware(req, res, next){

    if(!req.session.userLogged || req.session.userLogged.tipo_usuario_id === 2){
        return res.redirect('/user/login');
    }

    next();
}

module.exports = sellerMiddleware;