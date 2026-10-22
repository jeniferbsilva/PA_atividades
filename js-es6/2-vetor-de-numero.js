// Vetor de números.

const numeros = [1, 2, 3, 4, 5];

console.log('\n Exibindo todos os números:')
console.log(numeros)

console.log('\n Multiplicando todos os números por 2:')
console.log(numeros)
const numerosmultiplicadospordois = numeros.map(n => n*2)
console.log(numerosmultiplicadospordois)

console.log('\n Exibindo apenas os números pares:')
console.log(numeros)
const numerosPares = numeros.filter(n => n % 2 === 0)
console.log(numerosPares)

console.log('\n Exibindo a soma de todos os números:')
console.log(numeros)
const soma = numeros.reduce((soma, atual) => soma + atual, 0)
console.log(soma)


