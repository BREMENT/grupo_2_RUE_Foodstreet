const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        const pathFile = path.join(__dirname,'../../public/images/products');
        cb(null, pathFile);
    },
    filename: (req, file, cb)=>{
        const nameFile = Date.now()+'_'+file.fieldname+'_'+path.extname(file.originalname);
        cb(null, nameFile);
    }
});

upload = multer({ 
    storage,
    limits:{
        fieldSize: 1000000,
        fileSize: 1000000,
    },
    fileFilter: function(req, file, cb){
        const fileExtend = path.extname(file.originalname);
        if(!['.jpg','.png','.gif','.jpeg'].includes(fileExtend)){
            return cb(new Error('El tipo de archivo que intenta subir no es permitido'));
        }
        cb(null, true);
    }
 }).single('productImage');

module.exports = upload;