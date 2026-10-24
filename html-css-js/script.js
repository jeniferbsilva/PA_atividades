// Função que irá executar quando clicar no botão btn-gerar.
function gerarTabuada() {
    // Pega o valor do campo input no HTML.
    const numeroInput = document.getElementById('numero-input')

    // Converte o texto que veio do HTMl para número inteiro.
    let numero = parseInt(numeroInput.value)

    // Pega o elemento onde a tabuada será exibida no HTML e associa a uma constante
    const resultadoDiv = document.getElementById('resultado-aqui')

    // Limpa o conteúdo anterior no campo onde o resultado será exibido.
    resultadoDiv.innerHTML = ''

    // Adiciona o título da tabuada com tag h2.
    resultadoDiv.innerHTML += `<h2>Tabuada do número ${numero}</h2>`

    // Laço de repetição para gerar tabuada de 1 até 10.
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i
        resultadoDiv.innerHTML += `<p>${numero} x ${i} = ${resultado}</p>`
    }
}

// Pega o elemento onde a tabuada será exibida no HTML e associa a uma constante.
const btnGerar = document.getElementById('btn-gerar')

// Faz a função gerarTabuada() ser executada quando clicar no botão.
btnGerar.addEventListener('click', gerarTabuada)