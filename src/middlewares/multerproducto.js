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

upload = multer({ storage });

module.exports = upload;