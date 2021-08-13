const userController = {
    login: (req, res)=>{
        res.render('users/login');
    },
    signup: (req, res)=>{
        res.render('users/registro');
    },
    create: (req, res)=>{
        // registrar usuario
        res.send('registrar usuario');
    }
};

module.exports = userController;