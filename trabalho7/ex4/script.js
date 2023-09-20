const botaoEnviar = document.querySelector('#btnenviar')
const botaoOk = document.querySelector('#btnok')

function showMsg(message) {
    const divSaida = document.querySelector('#saida')
    const pSaida = document.querySelector('#msg')
    
    pSaida.textContent = message
    divSaida.style.visibility = 'visible'
}

botaoEnviar.onclick = () => { showMsg(document.querySelector('#inpMsg').value) }

botaoOk.onclick = function () {
    const divSaida = document.querySelector('#saida')
    divSaida.style.visibility = 'hidden'
}
