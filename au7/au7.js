const acordo = document.querySelectorAll('.titulo')

acordo.forEach(acord => {
    const acord_p = acord.parentElement;
    acord.addEventListener('click', () => {
        acord_p.classList.toggle('ativo')
    })
})