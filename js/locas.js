/* Seleccionando los elementos del DOM. */
const header = document.querySelector('.header')
const headerMenu = header.querySelector('.header__menu')
const overlay = document.querySelector('.overlay')

const cursor = document.querySelector('.cursor')
const links = document.querySelectorAll('a');
const buttons = document.querySelectorAll('button');


/* Una función que alterna la clase active en los elementos overlay y header. */
const headerMenuHandler = ()=>{
    overlay.classList.toggle('active')
    header.classList.toggle('active')
}

// MENÚ

/* Agregar un detector de eventos al elemento headerMenu. */

headerMenu.addEventListener('click', headerMenuHandler)


// CURSOR

/* Obtener el ancho y la altura del cursor y luego establecer la propiedad de transform del cursor
en las coordenadas x e y del mouse. */
const {width , height} = cursor.getBoundingClientRect(cursor)

window.addEventListener('mousemove' , ( {x , y} )=>{
    cursor.style.transform = `translateX(${ x - ( width / 2 ) }px) translateY(${ y - (height / 2) }px)`
})

// CURSOR OVER LINKS
links.forEach((eachLink)=> {
    eachLink.addEventListener('mouseover', ()=> {
        cursor.classList.add('scale');
    });
    eachLink.addEventListener('mouseout', ()=> {
        cursor.classList.remove('scale');
    });
});
buttons.forEach( (eachLink)=> {
    eachLink.addEventListener('mouseover', ()=> {
        cursor.classList.add('scale');
    });
    eachLink.addEventListener('mouseout', ()=> {
        cursor.classList.remove('scale');
    });
});