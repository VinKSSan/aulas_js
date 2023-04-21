const nave = document.querySelectorAll('.tabs li a');
const contet = document.querySelectorAll('.opcões .op1');

nave.forEach((tab ,  indice) => {
    tab.addEventListener('click', function(clickTab){
        clickTab.preventDefault();
        if(tab.classList.contains('active')){
            tab.classList.remove('active');
        } else {
            nave.forEach(outeTab => {
                outeTab.classList.remove('active')
            }) 
            tab.classList.add('active');
        }
        if(contet[indice].classList.contains('ativa')) {
            contet[indice].classList.remove('ativa');
            contet.forEach(cont => {
                cont.classList.remove('ativa');
            });
        } else {
            contet.forEach(cont => {
                cont.classList.remove('ativa');
            });
            contet[indice].classList.add('ativa');
        } 
    })      
});

