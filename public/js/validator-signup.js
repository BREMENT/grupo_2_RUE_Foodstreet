console.log('===Funcionando====');

// variables
const form = document.querySelector('form');
const btn = document.querySelector('.btn-register');
const email = document.querySelector('#email');
const tel = document.querySelector('#tel');
const password = document.querySelector('#password');
const apellidos = document.querySelector('#apellidos');
const nombres = document.querySelector('#nombres');
const condicion = document.querySelector('#condicion');
// const file -> falta;
// const categoria -> falta;

const nombres_err = document.querySelector('#nombres_err');
const apellidos_err = document.querySelector('#apellidos_err');
const email_err = document.querySelector('#email_err');
const password_err = document.querySelector('#password_err');

const errors = {}
nombres.focus();

// funciones
const notIsEmpty = input =>{
    if(validator.isEmpty(input.value,{ ignore_whitespace: true})){
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
    if(!validator.isLength(input.value, { min })){
        errors[input.name]=`El campo debe contener al menor ${min} caracteres`;
        input.classList.add('error-input');
        input.classList.remove('success-input');
        return false;        
    }
    delete errors[input.name];
    input.classList.remove('error-input');
    input.classList.add('success-input');
    return true;
}

const isEmail = input =>{
    if(!validator.isEmail(input.value)){
        errors[input.name] = `El email introducido no es valido`;
        input.classList.add('error-input');
        input.classList.remove('success-input');
        return false;
    }

    delete errors[input.name];
    input.classList.remove('error-input');
    input.classList.add('success-input');
    return true;
}

const isStrongPassword = input =>{
    if(!validator.isStrongPassword(input.value)){
        errors[input.name]=`El password es debil debe contener caracteres especiales, numeros y letras `;
        input.classList.add('error-input');
        input.classList.remove('success-input');
        return false;
    }
    
    delete errors[input.name];
    input.classList.remove('error-input');
    input.classList.add('success-input');
    return true;
}

const nombresValidations=()=>{
    if(!notIsEmpty(nombres)) return;
    isLength(nombres, 2);
}

const apellidosValidations=()=>{
    if(!notIsEmpty(apellidos)) return;
    isLength(apellidos, 2);
}

const emailValidations=()=>{
    if(!notIsEmpty(email)) return;
    isEmail(email);
}

const passwordValidations=()=>{
    if(!notIsEmpty(password)) return;
    if(!isLength(password, 8)) return;
    isStrongPassword(password);
}

const formValidations = () =>{
    nombresValidations();
    apellidosValidations();
    emailValidations();
    passwordValidations();
}


const printMsgErrors = () =>{

    nombres_err.innerHTML = '';
    apellidos_err.innerHTML = '';
    email_err.innerHTML = '';
    password_err.innerHTML = '';
    
    Object.keys(errors).forEach(key=>{
        switch(key){
            case 'nombres': 
                nombres_err.innerHTML = errors[key];
                break;
            case 'apellidos':
                apellidos_err.innerHTML = errors[key];
                break;
            case 'email':
                email_err.innerHTML = errors[key];
                break;
            case 'password':
                password_err.innerHTML = errors[key];
                break;
        }
    });
}

// eventos
form.addEventListener('submit', (e)=>e.preventDefault());

nombres.addEventListener('blur', ()=>{
    nombresValidations();
    printMsgErrors();
});

apellidos.addEventListener('blur', ()=>{
    apellidosValidations();
    printMsgErrors();
});

email.addEventListener('blur', ()=>{
    emailValidations();
    printMsgErrors();
});

password.addEventListener('blur', ()=>{
    passwordValidations();
    printMsgErrors();
});

btn.addEventListener('click', (e)=>{
    e.preventDefault();
    if(Object.keys(errors).length > 0){
        formValidations();
        printMsgErrors();
    }
});

