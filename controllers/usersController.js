const path = require('path');
const fs = require('fs');

const pathFile = path.join(__dirname, '../src/data/user.json');
const pathJson = JSON.parse(fs.readFileSync(pathFile, 'utf-8'));

const userController = {
    login: (req, res) => {
        res.render('users/login');
    },
    signup: (req, res) => {
        res.render('users/registro');

        console.log(pathJson);

    },
    create: (req, res) => {
        // registrar usuario
        res.send('registrar usuario');
    }
};

module.exports = userController;