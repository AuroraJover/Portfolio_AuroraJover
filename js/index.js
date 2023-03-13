'use strict'

/* Seleccionando los elementos del DOM. */
const header = document.querySelector('.header')
const headerMenu = header.querySelector('.header__menu')
const overlay = document.querySelector('.overlay')

const proyectos = document.querySelector('.proyectos')
const proyectosBtn = proyectos.querySelectorAll('.proyectos__btn')
const proyectosImg = proyectos.querySelectorAll('.proyectos__img')




/* Una función que alterna la clase active en los elementos overlay y header. */
const headerMenuHandler = ()=>{
    overlay.classList.toggle('active')
    header.classList.toggle('active')
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








