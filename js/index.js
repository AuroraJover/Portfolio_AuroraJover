'use strict'

/* Seleccionando los elementos del DOM. */
const header = document.querySelector('.header')
const headerMenu = document.querySelector('.header__menu')
const overlay = document.querySelector('.overlay')

const proyectos = document.querySelector('.proyectos')
const proyectosBtn = document.querySelectorAll('.proyectos__btn')
const proyectosImg = document.querySelectorAll('.proyectos__img')

const trabajos = document.querySelector('.trabajos')
const trabajosImgs = document.querySelectorAll('.trabajos__img')
const trabajosBtn = document.querySelectorAll('.trabajos__btn')
const trabajosContainer = document.querySelectorAll('.trabajos__container')

const lightbox = document.querySelector('.lightbox')
const lightboxBtn = document.querySelector('.lightbox__btn')
const lightboxImg = document.querySelector('.lightbox__img')


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


// PROYECTOS HOME

/* Agregar un detector de eventos a cada botón. Cuando el mouse está sobre el botón, elimina la clase
active de todos los botones e imágenes, luego agrega la clase active al botón y la imagen que se
está desplazando. Cuando el mouse ya no está sobre el botón, elimina la clase active de todos los
botones e imágenes. */

proyectosBtn.forEach(( eachBtn, i )=>{
    proyectosBtn[i].addEventListener('mouseover', ()=>{
        proyectosBtn.forEach((eachBtn , j)=>{
            proyectosBtn[j].classList.remove('active')
            proyectosImg[j].classList.remove('active')
        })
        proyectosBtn[i].classList.add('active')
        proyectosImg[i].classList.add('active')
    })
    proyectosBtn[i].addEventListener('mouseout', ()=>{
        proyectosBtn.forEach((eachLi , j)=>{
            proyectosBtn[j].classList.remove('active')
            proyectosImg[j].classList.remove('active')

        })
    })
})


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





