let pessoa = {
    nome: "Matheus",
    profissao: "Programador",
    idade: 28
}

pessoa.casado = true
delete pessoa.idade

console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa.casado)
console.log(pessoa)