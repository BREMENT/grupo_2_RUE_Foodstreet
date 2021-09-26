console.log('====funcionando====');
// variables
const form = document.querySelector('form');
const btn = document.querySelector('#btn');
const names = document.querySelector('#name');
const price = document.querySelector('#price');
const discount = document.querySelector('#discount');
const category = document.querySelector('#category');
const food_type = document.querySelector('#food_type');
const description = document.querySelector('#description');
const file = document.querySelector('#file');

const name_err = document.querySelector('#name_err');
const desc_err = document.querySelector('#desc_err');
const file_err = document.querySelector('#file_err');

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

const isValidFilie = input =>{
    console.log(input.files[0]);
    if(!validator.isIn(input.files[0].type,['image/jpg', 'image/png', 'image/jpeg'])){
        console.log('el file ingresado no es valido');
        errors[input.name]='El file ingresado no es valido';
        return false;
    }
    console.log('imagen valida');
    delete errors[input.name];
    file_err.innerHTML = '';
    return true;
}

const printMsgError = () =>{
    name_err.innerHTML = '';
    desc_err.innerHTML = '';
    file_err.innerHTML = '';
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
    if(!notIsEmpty(file)) return;
    isValidFilie(file);
}

const formValidations = () =>{
    nameValidations();
    descriptionValidations();
    fileValidations();
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

file.addEventListener('change', ()=>{
    fileValidations();
    printMsgError();
});

btn.addEventListener('click', (e)=>{
    e.preventDefault();
    formValidations();
    printMsgError();
});