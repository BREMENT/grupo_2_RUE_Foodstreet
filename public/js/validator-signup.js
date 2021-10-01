(()=>{
    'use strict';
    // variables
    const form = document.querySelector('form');
    const btn = document.querySelector('#btn');
    const email = document.querySelector('#email');
    const tel = document.querySelector('#tel');
    const password = document.querySelector('#password');
    const apellidos = document.querySelector('#apellidos');
    const nombres = document.querySelector('#nombres');
    const condicion = document.querySelector('#condicion');//TODO: validacion condicion
    const file = document.querySelector('#perfil');
    // const categoria -> falta;
    
    const nombres_err = document.querySelector('#nombres_err');
    const apellidos_err = document.querySelector('#apellidos_err');
    const email_err = document.querySelector('#email_err');
    const password_err = document.querySelector('#password_err');
    const file_err = document.querySelector('#file_err');
    const tel_err = document.querySelector('#tel_err');

    const errors = {};
    
    // funciones
    const notIsEmpty = input =>{
        if(validator.isEmpty(input.value,{ ignore_whitespace: true})){
            console.log('requerido');
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
            errors[input.name]=`El campo debe contener al menos ${min} caracteres`;
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
    
    const isValidFile = input =>{
        const res = validator.isIn(input.files[0].type,['image/jpeg','image/jpg','image/png']);
        if(!res){
            errors[input.name] = 'el file que intenta agregar no es valido';
            return false;
        }
        delete errors[input.name];
        file_err.innerHTML = '';
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
    
    const sizeImage = input => {
        if( input.files[0].size > 1048576 ){
            errors[input.name] = `El archivo que intenta ingresar excede el tamaño de 1MB`;
            return false;
        }
        delete errors[input.name];
        file_err.innerHTML = '';
        return true;
    }

    const isMobileNumber = input => {
        if(!validator.isMobilePhone(input.value)){
            errors[input.name] = `El número telefonico introducio no es valido`;
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
        if(!isLength(nombres, 2)) return;
    }
    
    const apellidosValidations=()=>{
        if(!notIsEmpty(apellidos)) return;
        if(!isLength(apellidos, 2)) return;
    }
    
    const emailValidations=()=>{
        if(!notIsEmpty(email)) return;
        if(!isEmail(email)) return;
    }
    
    const passwordValidations=()=>{
        if(!notIsEmpty(password)) return;
        if(!isLength(password, 8)) return;
        if(!isStrongPassword(password)) return;
    }
    
    const telValidations= () =>{
        if(!notIsEmpty(tel)) return;
        if(!isMobileNumber(tel)) return;
    }

    const fileValidations = () =>{
        if(!notEmptyFile(file)) return;
        if(!isValidFile(file)) return;
        if(!sizeImage(file))return;
    }
    
    const formValidations = () =>{
        nombresValidations();
        apellidosValidations();
        emailValidations();
        passwordValidations();
        fileValidations();
        telValidations();
        console.log(errors);
    }
    
    
    const printMsgErrors = () =>{
        nombres_err.innerHTML = '';
        apellidos_err.innerHTML = '';
        email_err.innerHTML = '';
        password_err.innerHTML = '';
        file_err.innerHTML = '';
        tel_err.innerHTML = '';
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
                case 'perfil':
                    file_err.innerHTML = errors[key];
                    break;
                case 'telefono':
                    tel_err.innerHTML = errors[key];
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
    
    tel.addEventListener('blur', ()=>{
        telValidations();
        printMsgErrors();
    })
    
    file.addEventListener('change', ()=>{
        fileValidations();
        printMsgErrors();
    });
    
    // nombres.addEventListener('change', ()=>{
    //     notIsEmpty(nombres);
    // });

    btn.addEventListener('click', (e)=>{
        e.preventDefault();
        formValidations();
        printMsgErrors();
    
        if(Object.keys(errors).length === 0){
            console.log('enviar');
            form.submit();
        }
        
    });

})();    
