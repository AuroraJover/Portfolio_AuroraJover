'use strict'

/* Seleccionando los elementos del DOM. */
const header = document.querySelector('.header')
const headerMenu = header.querySelector('.header__menu')
const overlay = document.querySelector('.overlay')

const skills = document.querySelector('.skills')
const skillsH2 = skills.querySelectorAll('.skills__h2')
const skillsLista = skills.querySelectorAll('.skills__lista')

const cursor = document.querySelector('.cursor')


/* Una función que alterna la clase active en los elementos overlay y header. */
const headerMenuHandler = ()=>{
    overlay.classList.toggle('active')
    header.classList.toggle('active')
}

// MENÚ

/* Agregar un detector de eventos al elemento headerMenu. */

headerMenu.addEventListener('click', headerMenuHandler)

// ACORDEÓN SKILLS

skillsH2.forEach( ( eachBtn , i )=>{
    skillsH2[i].addEventListener('click', ()=>{
        skillsLista.forEach(( eachBtn , j)=>
            skillsLista[j].classList.remove('active'))
        skillsLista[i].classList.add('active')
    })
    
})

// CURSOR

/* Obtener el ancho y la altura del cursor y luego establecer la propiedad de transform del cursor
en las coordenadas x e y del mouse. */
const {width , height} = cursor.getBoundingClientRect(cursor)

window.addEventListener('mousemove' , ( {x , y} )=>{
    cursor.style.transform = `translateX(${ x - ( width / 2 ) }px) translateY(${ y - (height / 2) }px)`
})