const root= document.querySelector('#root')
const toggler= document.querySelector('#toggler')
const cerrar = document.querySelector('#cerrar')
const menuLinks = document.querySelectorAll('#lista a')

toggler.addEventListener('click',()=>{
    root.classList.add('open')
})
cerrar.addEventListener('click', ()=>{
    root.classList.remove('open')
})

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        root.classList.remove('open');
    });
})