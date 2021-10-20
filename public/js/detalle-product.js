(()=>{
    'use strict';

    const form = document.querySelector('#form_delete'),
            btn = document.querySelector('#btn');

    form.addEventListener('submit', (e)=>e.preventDefault());

    btn.addEventListener('click', (e)=>{
        e.preventDefault();
        const resp = confirm('Esta seguro de querer eliminar el producto');
        console.log(resp);
        if(resp){
            form.submit();
        }
    });

})();