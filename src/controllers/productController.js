const {v4: uuidv4} = require('uuid');
const { validationResult } = require('express-validator');
const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/menu.json');   
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productoController = {
    detalle: (req, res)=>{
        const product = products.find(p =>p.id ===req.params.id)
        res.render('productDetail', {product:product, user: req.session.userLogged })
    },
    products: (req, res)=>{
        const visited = products.filter(product => product.category === 'visited')
        const inSale = products.filter(product => product.category === 'in-sale')
        res.render('products', {visited: visited, inSale:inSale})
    },
    create: (req, res)=>{
        res.render('product-create-form');
    },
    store: (req, res)=>{
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            res.render('product-create-form',{errors: errors.mapped(), old: req.body });
            return;
        }

        const newProduct = req.body;
        newProduct.id= uuidv4();

        if(!req.file){
            newProduct.image = 'default-image.png'
        }else{
            newProduct.image = req.file.filename;
        }

        products.push(newProduct);
        
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
        res.redirect('/productos/');
        
    },
    edit: (req, res)=>{
        const product = products.find( product => product.id === req.params.id );
        res.render('productEdit', { product });
    },
    update: (req, res)=>{
        const product = products.find( product => product.id === req.params.id);

        const errors = validationResult(req);

        if(!errors.isEmpty()){    
            res.render('productEdit' ,{errors: errors.mapped(), product});
            return;
        }
        
        product.name = req.body.name,
        product.price = req.body.price,
        product.discount = req.body.discount,
        product.category = req.body.category,
        product.food_type = req.body.food_type,
        product.description = req.body.description
        
        fs.writeFileSync(productsFilePath, JSON.stringify( products, null, 2));
        res.redirect('/productos/');
    },
    delete: (req, res)=>{
        // TODO: checar si hacemos un alerta para no borrar de golpe el producto o dejarlo de esta forma
    },
    destroy: (req, res)=>{
        const post = products.findIndex(product => product.id === req.params.id);
        
        console.log(products[post]);
        if(products[post].image !== 'detault-img.png'){
            fs.unlinkSync(path.join(__dirname,`../../public/images/products/${products[post].image}`));
        }

        products = products.filter( product=> product.id !== req.params.id);
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
        

        res.redirect('/productos/');
    }
};

module.exports = productoController;