// Vetor de objetos (Usuários).

const usuarios = [
    { nome: 'Marta', idade: 30 },
    { nome: 'José', idade: 40 },
    { nome: 'Maria', idade: 50},
    { nome: 'Marcela', idade: 60}
];

console.log('\n Exibindo todos os usuários do vetor:')
usuarios.forEach(u => console.log(`${u.nome} tem ${u.idade} anos`))


// console.log('\n 'Com laço de repetição FOR EACH (Para cada):)
    
// for(const u of usuarios)
//     console.log(`${u.nome} tem ${u.idade} anos`)


console.log('\n Filtrando usuários com idade acima de 50 anos:')
const maiordeCinquenta = usuarios.filter( u => u.idade >=50)
maiordeCinquenta.forEach(u => console.log(`${u.nome} tem ${u.idade} anos`))

console.log('\n Exibindo apenas os nomes:')
const nomes = usuarios.map(u => u.nome)
nomes.forEach(u => console.log(`${u}`))

console.log('\n Encontrando um usuário:')
const usuarioEncontrado = usuarios.find(u => u.nome === 'Marta')
console.log(usuarioEncontrado)
console.log(`${usuarioEncontrado.nome} tem ${usuarioEncontrado.idade} anos`)

console.log('\n Mostrando a soma de todas as idades:')
const somaIdades = usuarios.reduce((total, u) => total + u.idade, 0)
console.log(`Total das idades: ${somaIdades}`)