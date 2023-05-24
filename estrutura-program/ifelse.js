let aluno = "Arthur Rocha"
let nota1 = 2.7
let nota2 = 7.5
let nota3 = 7.6
let nota4 = 5.9
let media = (nota1 + nota2 + nota3 + nota4) / 4

if (media >= 7) {
    console.log(`O aluno ${aluno} foi aprovado com a média = ${media.toFixed(2)}`)
} else if (media >= 6 ) {
    console.log(`O aluno ${aluno} ficou de recuperação com a média = ${media.toFixed(2)}`)   
} else {
    console.log(`O aluno ${aluno} foi reprovado com a média = ${media.toFixed(2)}`)
}
 