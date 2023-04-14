const calcularBtn = document.querySelector('#calculate')
calcularBtn.addEventListener('click', calcularGorjeta)

function calcularGorjeta() {
const total = document.querySelector('#money').value
const nPessoas = document.querySelector('#People').value
const porcentagem = document.querySelector('#Porcentagem').value

if (!total || !nPessoas) {
    alert('Campos Vazios.')
    } else {
    const gorjeta = (total * (porcentagem / 100)) / nPessoas

    const valorGorjeta = document.querySelector('#valor-gorjeta')
    valorGorjeta.innerText = 'R$' + gorjeta.toFixed(2)
    }
}