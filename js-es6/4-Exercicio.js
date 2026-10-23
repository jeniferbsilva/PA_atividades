const listaDeAlunos = [
    { nome: 'Ana', nota: 5.0 },
    { nome: 'Bruno', nota: 10.0 },
    { nome: 'Maria', nota: 2.0 },
    { nome: 'Marta', nota: 7.0 },
    { nome: 'Cecília', nota: 6.0 }
];

console.log('\n Mostre todos os alunos, seus nomes e suas notas:')
listaDeAlunos.forEach(aluno => console.log(`${aluno.nome} tem nota ${aluno.nota}`))

console.log('\n Mostre a média geral dos alunos: ')
const mediaGeral = listaDeAlunos.reduce((total,aluno) => total + aluno.nota, 0) / listaDeAlunos.length
console.log(mediaGeral)

console.log('\n Mostre o nome e a nota dos alunos abaixo de 7.0:')
listaDeAlunos.filter(alunos => alunos.nota < 7.0).forEach(alunos => console.log(`${alunos.nome} tem nota ${alunos.nota}`))

console.log('\n Mostre apenas o nome dos alunos com nota maior ou igual a 7.0:')
const alunosAprovados = listaDeAlunos.filter(alunos => alunos.nota >= 7.0)
alunosAprovados.forEach(alunos => console.log(`${alunos.nome}`))

console.log('\n Mostre o nome e a nota do aluno Bruno: ')
const alunoBruno = listaDeAlunos.find(aluno => aluno.nome === 'Bruno')
console.log(`${alunoBruno.nome} tem nota ${alunoBruno.nota}`)

console.log('\n Some todas as notas: ')
console.log(listaDeAlunos.reduce((total,aluno) => total + aluno.nota,0))

console.log('\n Liste todos os nomes dos alunos, sem mostrar suas notas:')
const nomes = listaDeAlunos.map(u => u.nome)
nomes.forEach(u => console.log(`${u}`))
