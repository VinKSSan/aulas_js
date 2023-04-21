const modal = document.getElementById('modal')
const abrir = document.querySelector('.abrir')
const fechar = document.querySelector('.fechar')

function aberto() {
    modal.classList.add('active')
}

function fechado() {
    modal.classList.remove('active')
}

abrir.addEventListener('click' , aberto)

fechar.addEventListener('click' , fechado)