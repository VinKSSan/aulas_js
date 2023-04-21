const nav = document.querySelectorAll('.nav li a');


function nome(even) {
    even.preventDefault();
    const ref = even.currentTarget.getAttribute('href');

    const secão = document.querySelector(ref);
//secao.scrollIntoView({ behavior: 'smooth' })
//const posicao = secão.getBoundingClientRect().top
    const posicao = secão.offsetTop //elemento secão precisa de posição definida
    console.log(posicao)

    window.scrollTo({
        top:posicao - 50,//-50 por conta  do menu
        behavior:'smooth',
    })

    console.log(posicao)

}

nav.forEach(lik => {
    lik.addEventListener('click', nome )
});

/*const section = document.getElementById('my-section');
const rect = section.getBoundingClientRect();
const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
const sectionTop = rect.top + scrollTop;
console.log(sectionTop);

Neste exemplo, o método getElementById é usado para selecionar a 
seção com o ID my-section. Em seguida, o método getBoundingClientRect()
 é usado para obter a posição da seção em relação à janela de visualização.
  A distância de rolagem da página é obtida através da propriedade pageYOffset da
   janela ou da propriedade scrollTop do elemento document.documentElement. Finalmente, 
   a posição do topo da seção em relação ao topo da página é calculada somando a distância 
   de rolagem da página à distância do topo da janela de visualização até o topo do elemento.*/