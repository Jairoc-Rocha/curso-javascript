let idade = 15
let possuiCnh = false

if (idade >= 18 && possuiCnh === false) {
    console.log(`Usuário é maior de idade ${idade} porém não possui CNH então não pode dirigir`)
} else if (idade >= 18 && possuiCnh === true) {
    console.log(`Usuário é maior de idade ${idade} possui CNH então  pode dirigir`)
} else {
    console.log(`Usuário é menor de idade ${idade} então não pode dirigir`)
}