const { validationResult } = require('express-validator');
const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/menu.json');   
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productoController = {
    detalle: (req, res)=>{
        let id = parseInt(req.params.id, 10)
        const product = products.find(p =>p.id ===id)
        res.render('detalleProducto', {product:product})
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
        newProduct.id=Date.now();

        if(!req.file){
            newProduct.image = 'default-image.png'
        }else{
            newProduct.image = req.file.filename;
        }

        products.push(newProduct);
        
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
        res.redirect('/productos/products');
        
    },
    edit: (req, res)=>{
        res.send('formulario-editar');
    },
    update: (req, res)=>{
        res.send('datos del formulario');
    }

};

module.exports = productoController;