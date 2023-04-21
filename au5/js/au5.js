
let campo_senha = document.querySelector('.conteiner input');
let botão = document.querySelector('.conteiner button');

console.log(campo_senha.getAttribute('type'))

botão.addEventListener('click', function() {
    if(campo_senha.getAttribute('type')==='text') {
        campo_senha.setAttribute('type' , 'password');
        console.log(campo_senha.getAttribute('type'));
    } else {
        campo_senha.setAttribute('type' , 'text');
        console.log(campo_senha.getAttribute('type'));
    }
})


let alldrop = document.querySelectorAll('.drop');
//arroy function =>, 0 parametros () => , mais de um parametro (1,2,3) =>, parametro unico 1 =>.
alldrop.forEach((iteem, indice, lista_completa) => {
    console.log(iteem, indice, lista_completa);
    iteem.addEventListener('click' , function() {
        console.log('clique no item ' + indice);
    }); 
    
    lista_completa[2].addEventListener('click' , function() {
        console.log('clique no item ck 2');
    });  
    
});
