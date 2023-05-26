let aluno= {
    "nome": "Arthur",
    "idade": 15,
    "profissao": "jogador de futebol",
    "Hobbies": ["Video game", "futebol", "namorar"]
}

let alunoString = JSON.stringify(aluno)
console.log(alunoString)

let alunoJson = JSON.parse(alunoString)
console.log(alunoJson)