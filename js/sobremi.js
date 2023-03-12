'use strict'

/* Seleccionando los elementos del DOM. */
const header = document.querySelector('.header')
const headerMenu = document.querySelector('.header__menu')
const overlay = document.querySelector('.overlay')

const skillsH2 = document.querySelectorAll('.skills__h2')
const skillsLista = document.querySelectorAll('.skills__lista')

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