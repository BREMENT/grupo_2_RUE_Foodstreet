// variables
const form = document.querySelector('form');
const btn = document.querySelector('.btn-register');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

const pass_err = document.querySelector('#pass-err');
const email_err = document.querySelector('#email-err');

const errors = {}

// funciones
const notIsEmpty = input =>{
    if(validator.isEmpty(input.value,{ ignore_whitespace: true })){
        errors[input.name] = `El campo es ${input.name} requerido`;
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
        errors[input.name] = `El dato introducido no es un email valido`;
        input.classList.add('error-input');
        input.classList.remove('success-input');
        return false;
    }
    delete errors[input.name];
    input.classList.remove('error-input');
    input.classList.add('success-input');
    return true;
}

const emailValidation = () =>{
    if(!notIsEmpty(email)) return;
    isEmail(email);
}

const passwordValidation = () =>{
    if(!notIsEmpty(password)) return;
}

const formValidation = () =>{
    emailValidation();
    passwordValidation();
    console.log(errors);
}

const printMsgError = () => {
    pass_err.innerHTML = '';
    email_err.innerHTML = '';
    Object.keys(errors).forEach( key =>{
        switch(key){
            case 'email':
                email_err.innerHTML = errors[key];
                break;
            case 'password':
                pass_err.innerHTML = errors[key];
                break;
        }
    });
}

// eventos
form.addEventListener('submit', (e)=> e.preventDefault());

email.addEventListener('blur', ()=>{
    emailValidation();
    printMsgError();
});

password.addEventListener('blur', ()=>{
    passwordValidation();
    printMsgError();
});

btn.addEventListener('click', (e)=>{
    e.preventDefault();
    
    pass_err.innerHTML = '';
    email_err.innerHTML = '';

    if(Object.keys(errors).length >= 0){
        formValidation();
        printMsgError();
    }else{
        form.submit();
    }
    
});
