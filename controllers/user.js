const userController = {
    login: (req, res)=>{
        res.render('login');
    },
    sigup: (req, res)=>{
        res.render('registro');
    }
};

module.exports = userController;