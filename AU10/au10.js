const  conta = document.getElementById('cont');

function contador() {
    conta.textContent = 1 + Number(conta.textContent);
}
setTimeout(setInterval(contador , 1000) , 10000)
