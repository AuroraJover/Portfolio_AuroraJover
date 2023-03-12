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

const skillsH2 = document.querySelectorAll('.skills__h2')
const skillsLista = document.querySelectorAll('.skills__lista')

/* Una función que alterna la clase active en los elementos de superposición y encabezado. */
const headerMenuHandler = ()=>{
    overlay.classList.toggle('active')
    header.classList.toggle('active')
}

/* Eliminando la clase active del elemento lightbox. */
const lightboxBtnHandler = ()=>{
    lightbox.classList.remove('active')
}

/**
 * Para cada botón de la matriz de botones, elimine la clase 'active' del botón y de la imagen.
 */
const proyectosRemoveHandler = ()=>{
    proyectosBtn.forEach((eachBtn , j)=>{
        proyectosBtn[j].classList.remove('active')
        proyectosImg[j].classList.remove('active')
    })
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
        proyectosRemoveHandler()

        proyectosBtn[i].classList.add('active')
        proyectosImg[i].classList.add('active')
    })
    proyectosBtn[i].addEventListener('mouseout', proyectosRemoveHandler())
        
})


// LIGHTBOX PROYECTOS

/* Agregar un detector de eventos a cada imagen en la matriz trabajosImgs. Cuando se hace clic en la
imagen, se muestra el lightbox y la fuente de la imagen se establece en la imagen en la que se
hizo clic. */

trabajosImgs.forEach( (eachImgs , i)=>{
    trabajosImgs[i].addEventListener('click', ()=>{
        lightbox.classList.add('active')

        let ruta = trabajosImgs[i].scr
        lightboxImg.src = ruta
    })
})

/* Agregar un detector de eventos al elemento lightboxBtn. Cuando se hace clic en lightboxBtn, se llama
a la función lightboxBtnHandler. */

// lightboxBtn.addEventListener('click' , lightboxBtnHandler)


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


// ACORDEÓN SKILLS

skillsH2.forEach( ( eachBtn , i )=>{
    skillsH2[i].addEventListener('click', ()=>{
        skillsLista.forEach(( eachBtn , j)=>
            skillsLista[j].classList.remove('active'))
        skillsLista[i].classList.toggle('active')
    })
    
})


