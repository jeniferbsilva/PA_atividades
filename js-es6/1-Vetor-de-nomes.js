// Criando um vetor.

const listaNomes = ['Marta', 'José', 'Maria'];

console.log('\n Exibindo todos os nomes do vetor:')
console.log(listaNomes)

console.log('\n Exibindo o primeiro elemento do vetor:')
console.log(listaNomes[0])

console.log('\n Adicionando um elemento no vetor:')
listaNomes.push('Marília')
console.log(listaNomes)

// Adicione seu nome no vetor

listaNomes.push('Jenifer')
console.log(listaNomes)

//  Removendo

console.log('\n Removendo o primeiro elemento do vetor:')
listaNomes.shift()
console.log(listaNomes)

console.log('\n Removendo um elemento específico do vetor: ')
//A partir do índice 2, remover apenas um elemento.
listaNomes.splice(2, 1)
console.log(listaNomes)

console.log('\n Removendo o último elemento do vetor:')
listaNomes.pop()
console.log(listaNomes)