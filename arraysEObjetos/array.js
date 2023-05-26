let n = [5, 2, 4, 8, 9]

let nomes = ["Jairo", "Jane", "Arthur"]
let [nomeA, nomeB, nomeC] = nomes
console.log(nomeA)
console.log(nomeB)
console.log(nomeC)

console.log(n.length)
console.log(n[3])
console.log(n)

let copia = [...n, nomes]
console.log(copia)