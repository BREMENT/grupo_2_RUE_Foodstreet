const { v4: uuidv4 } = require('uuid');
const path = require('path');
const fs = require('fs');

const UserModel = {

    path: path.join(__dirname,'../data/user.json'),
    getDataBase: function (){
        if(!fs.existsSync(this.path)){
            fs.writeFileSync(this.path, JSON.stringify([],null, 2));
        }
        return JSON.parse(fs.readFileSync(this.path, {encoding: 'utf-8'}));
    },
    findAll: function(){
        return this.getDataBase();
    },
    findById: function(id){
        const userList = this.getDataBase();
        return userList.find(user => user.id === id);
    },
    findField: function(field, text){
        const userList = this.getDataBase();
        return userList.find( user => user[field] === text );
    },
    create: function( userData ){
        const userList = this.getDataBase();
        const user = {
            id: uuidv4(), 
            ...userData
        }
        userList.push(user);
        fs.writeFileSync(this.path, JSON.stringify(userList, null, 2));
        return user;
    }

}

module.exports = UserModel;