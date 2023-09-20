const botao = document.querySelector('#btncalc')


botao.onclick = function () {
    const inputAltura = document.querySelector('#altura')
    const selectSexo = document.querySelector('#sexo')
    const pSaida = document.querySelector('#saida')

    let altura = parseInt(inputAltura.value)
    let sexo = selectSexo.value
    let pesoIdeal

    if (sexo == 'masculino') {
        pesoIdeal = 52 + (0.75 * (altura - 152.4))
    } else {
        pesoIdeal = 52 + (0.67 * (altura - 152.4))
    }

    pSaida.textContent = `Considerando o sexo ${sexo} e uma altura de ${altura}cm, seu peso ideal é: ${pesoIdeal}`
}
