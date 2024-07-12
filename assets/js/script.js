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

const modal  = document.getElementById('modal-sesiones');
const iniciar = document.getElementById('iniciar-sesion');
const registrar = document.getElementById('registrate');

iniciar.addEventListener("click",function() {
    modal.style.display = "block";
    modal.style.top = "70px";
    modal.style.right = "50px";
  });

registrar.addEventListener("click",function() {
    modal.style.display = "block";
    modal.style.top = "70px";
    modal.style.right = "130px";
  });

  function closeMenu(event) {
    if (!modal.contains(event.target) && event.target !== iniciar && event.target !== registrar ) {
      modal.style.display = "none";
    
  }
}
// Añadir el evento de clic al documento
document.addEventListener("click", closeMenu);

