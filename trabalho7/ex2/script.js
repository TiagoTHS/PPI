const botao = document.querySelector('button')

botao.onclick = function () {
    const inputNome = document.querySelector('input')
    const pSaida = document.querySelector('p')
    pSaida.textContent = 'Obrigado, ' + inputNome.value
}
