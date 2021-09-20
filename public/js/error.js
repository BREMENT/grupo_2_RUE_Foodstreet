const images = document.querySelector('#images');

const arrayImages = ['/images/product-error/1.jpg', '/images/product-error/2.jpg', '/images/product-error/3.jpg', '/images/product-error/4.jpg'];
let index = 0;

function cambioImg (){
    images.src= arrayImages[index];
    console.log(index);
    if(index < arrayImages.length - 1){
        index ++;
    }else{
        index = 0;
    }
}

setInterval( cambioImg, 1000);