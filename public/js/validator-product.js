(()=>{
    'use strict';
    // variable
    const   form = document.querySelector('form'),
            btn = document.querySelector('#btn'),
            names = document.querySelector('#name'),
            price = document.querySelector('#price'),
            discount = document.querySelector('#discount'),
            category = document.querySelector('#category'), 
            food_type = document.querySelector('#food_type'),
            description = document.querySelector('#description'),
            file = document.querySelector('#file');
            
    const  name_err = document.querySelector('#name_err'),
           desc_err = document.querySelector('#desc_err'),
           file_err = document.querySelector('#file_err'),
           discount_err = document.querySelector('#discount_err'),
           price_err = document.querySelector('#price_err'),
           food_type_err = document.querySelector('#food_type_err'),
           category_err = document.querySelector('#category_err');
 
    const errors = {};
    
    // funciones
    const notIsEmpty = input =>{
        if(validator.isEmpty(input.value, { ignore_whitespace: true})){
            errors[input.name] = `El campo ${input.name} es requerido`;
            input.classList.add('error-input');
            input.classList.remove('success-input');
            return false;
        }
        
        delete errors[input.name];
        input.classList.remove('error-input');
        input.classList.add('success-input');
        return true;
    }
    
    const isLength = (input, min) =>{
        if(!validator.isLength(input.value, {min})){
            errors[input.name]= `El campo debe contener al menos ${min} carateres`;
            input.classList.add('error-input');
            input.classList.remove('success-input');
            return false;
        }
    
        delete errors[input.name];
        input.classList.remove('error-input');
        input.classList.add('success-input');
        return true;
    }
    
    const isInt = input =>{
        if(!validator.isInt(input.value)){
            errors[input.name] = `El valor no es un entero`;
            input.classList.add('error-input');
            input.classList.remove('success-input');
            return false;
        }
        delete errors[input.name];
        input.classList.remove('error-input');
        input.classList.add('sucess-input');
        return true;
    }
    
    const isFloat = input =>{
        if(!validator.isFloat(input.value)){
            errors[input.name] = `El número ingresado debe ser decimal`;
            input.classList.add('error-input')
            input.classList.remove('success-input');
            return false;
        }
        delete errors[input.name];
        input.classList.remove('error-input');
        input.classList.add('success-input');
        return true;
    }
    
    const inRange = (input, min, max)=>{
        if(!(input.value >= min && input.value <=max)){
            errors[input.name] = `El valor no esta en el rango ${min} y ${max}`;
            input.classList.add('error-input');
            input.classList.remove('success-input');
            return false;
        }
        delete errors[input.name];
        input.classList.remove('error-input');
        input.classList.add('sucess-input');
        return true;
    }
    
    const notEmptyFile = input => {
        if(!input.files[0]){
            errors[input.name] = `El campo ${input.name} es requerido`;
            return false;
        }
        delete errors[input.name];
        file_err.innerHTML = '';
        return true;
    }
    
    const isValidFilie = input =>{
        console.log(input.files[0]);
        if(!validator.isIn(input.files[0].type,['image/jpg', 'image/png', 'image/jpeg'])){
            errors[input.name]='El archivo ingresado no es un formato valido, debe de ser un (jpg, png, gif, jpeg)';
            return false;
        }
        delete errors[input.name];
        file_err.innerHTML = '';
        return true;
    }
    
    // TODO: validar que esto se aplique
    const sizeImage = input => {
        if(input.files[0].size > 1048576 ){
            errors[input.name] = `El archivo que intenta ingresar excede el tamaño de 1MB`;
            return false;
        }
        delete errors[input.name];
        file_err.innerHTML = '';
        return true;
    }
    
    const printMsgError = () =>{
        name_err.innerHTML = '';
        desc_err.innerHTML = '';
        file_err.innerHTML = '';
        discount_err.innerHTML = '';
        price_err.innerHTML = '';
        food_type_err.innerHTML = '';
        category_err.innerHTML = '';
        
        Object.keys(errors).forEach( key =>{
            switch(key){
                case 'name':
                    name_err.innerHTML = errors[key];
                    break;
                case 'description':
                    desc_err.innerHTML = errors[key];
                    break;
                case 'productImage':
                    file_err.innerHTML = errors[key];
                    break;
                case 'discount':
                    discount_err.innerHTML = errors[key];
                    break;
                case 'price':
                    price_err.innerHTML = errors[key];
                    break;
                case 'category':
                    category_err.innerHTML = errors[key];
                    break;
                case 'food_type':
                    food_type_err.innerHTML = errors[key];
                    break;
            }
        });
    }
    
    const nameValidations = () =>{
        if(!notIsEmpty(names)) return;
        if(!isLength(names, 5, 50)) return;   
    }
    
    const descriptionValidations = () =>{
        if(!notIsEmpty(description)) return;
        if(!isLength(description, 15)) return;   
    }
    
    const fileValidations = () =>{
        if(!notEmptyFile(file)) return;
        if(!isValidFilie(file)) return;
        if(!sizeImage(file)) return;
    }
    
    const priceValidations = () =>{
        if(!notIsEmpty(price)) return;
        if(!isFloat(price)) return;
        if(!inRange(price, 10, 5000)) return;
    }
    
    const discountValidations = () =>{
        if(!notIsEmpty(discount)) return;
        if(!isInt(discount)) return;
        if(!inRange(discount,0,99)) return;
    }
    
    const categoryValidations = () =>{
        if(!notIsEmpty(category)) return;
    }

    const foodTypeValidations = () =>{
        if(!notIsEmpty(food_type)) return;
    }

    const formValidations = () =>{
        nameValidations();
        descriptionValidations();
        fileValidations();
        priceValidations();
        discountValidations();
        categoryValidations();
        foodTypeValidations();
        // console.log(errors);
    }
    
    // eventos
    form.addEventListener('submit', (e)=> e.preventDefault());
    
    names.addEventListener('blur', ()=>{
        nameValidations();
        printMsgError();
    });
    
    description.addEventListener('blur', ()=>{
        descriptionValidations();
        printMsgError();
    });
    
    price.addEventListener('blur', ()=>{
        priceValidations();
        printMsgError();
    });
    
    price.addEventListener('change', ()=>{
        priceValidations();
        printMsgError();
    });
    
    discount.addEventListener('blur', ()=>{
        discountValidations();
        printMsgError();
    })
    
    discount.addEventListener('change', ()=>{
        discountValidations();
        printMsgError();
    })
    
    file.addEventListener('change', ()=>{
        fileValidations();
        printMsgError();
    });
    
    btn.addEventListener('click', (e)=>{
        e.preventDefault();
        formValidations();
        printMsgError();
        if(Object.keys(errors).length === 0){
            form.submit();
        }
    });
})();