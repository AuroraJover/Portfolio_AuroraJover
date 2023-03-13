'use strict'

/* Seleccionando los elementos del DOM. */
const header = document.querySelector('.header')
const headerMenu = header.querySelector('.header__menu')
const overlay = document.querySelector('.overlay')

const trabajos = document.querySelector('.trabajos')
const trabajosImgs = trabajos.querySelectorAll('.trabajos__img')
const trabajosBtn = trabajos.querySelectorAll('.trabajos__btn')
const trabajosContainer = trabajos.querySelectorAll('.trabajos__container')

const lightbox = document.querySelector('.lightbox')
const lightboxBtn = lightbox.querySelector('.lightbox__btn')
const lightboxImg = lightbox.querySelector('.lightbox__img')

const cursor = document.querySelector('.cursor')


/* Una función que alterna la clase active en los elementos overlay y header. */
const headerMenuHandler = ()=>{
    overlay.classList.toggle('active')
    header.classList.toggle('active')
}

/* Eliminando la clase active del elemento lightbox. */
const lightboxBtnHandler = ()=>{
    lightbox.classList.remove('active')
}

// MENÚ

/* Agregar un detector de eventos al elemento headerMenu. */

headerMenu.addEventListener('click', headerMenuHandler)


// LIGHTBOX PROYECTOS

/* Agregar un detector de eventos a cada imagen en la matriz trabajosImgs. Cuando se hace clic en la
imagen, se muestra el lightbox y la fuente de la imagen se establece en la imagen en la que se
hizo clic. */

trabajosImgs.forEach(( eachtrabajosImgs , i)=>{
    trabajosImgs[i].addEventListener('click',()=>{
        lightbox.classList.add('active')

        let ruta = trabajosImgs[i].src
        console.log(ruta)
        lightboxImg.src = ruta
    })
})

lightboxBtn.addEventListener('click' , lightboxBtnHandler)


// ACORDEÓN PROYECTOS

/* Agregar un detector de eventos a cada botón. Cuando se hace clic en el botón, elimina la clase
active de todos los contenedores y luego agrega la clase active al contenedor que corresponde al
botón en el que se hizo clic. */

trabajosBtn.forEach( (eachBtn , i )=>{
    trabajosBtn[i].addEventListener('click', ()=>{
        trabajosContainer.forEach(( eachBtn , j )=> 
            trabajosContainer[j].classList.remove('active'))
        trabajosContainer[i].classList.add('active')
    })  
})


// CURSOR

/* Obtener el ancho y la altura del cursor y luego establecer la propiedad de transform del cursor
en las coordenadas x e y del mouse. */
const {width , height} = cursor.getBoundingClientRect(cursor)

window.addEventListener('mousemove' , ( {x , y} )=>{
    cursor.style.transform = `translateX(${ x - ( width / 2 ) }px) translateY(${ y - (height / 2) }px)`
})