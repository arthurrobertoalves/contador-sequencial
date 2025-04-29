function contar() {
    var inicio = Number(document.getElementById('inicio').value)
    var fim = Number(document.getElementById('fim').value)
    var passo = Number(document.getElementById('passo').value)

    if (passo <= 0) {
        alert('Passo inválido! Considerando passo 1')
        passo = 1
    }

    var resultado = ''

    while (inicio <= fim) {
        resultado += inicio + ' ➡️ '
        inicio += passo
    }

    resultado += '🏁'
    document.getElementById('text').innerText = resultado

}
