let pessoa = {
    nome: "Matheus",
    profissao: "Programador",
    idade: 28
}

let endereco = {
    rua: "Rua x",
    numero: 123
}

let aluno = {
    nome: "Arthur",
    idade: 15,
    namora: true 
}
console.log("Destructuring de objetos")
const {nome, idade, namora} = aluno
console.log(aluno)

pessoa.casado = true
delete pessoa.idade

console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa.casado)
console.log(pessoa)
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.assign(pessoa, endereco))