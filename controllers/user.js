const userController = {
    login: (req, res)=>{
        res.render('login');
    },
    signup: (req, res)=>{
        res.render('registro');
    }
};

module.exports = userController;