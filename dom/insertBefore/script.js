let novoElemento = document.createElement('p')
novoElemento.innerText = "Texto do elemento criado"
let elementoReferencia = document.querySelector('#titulo-principal')
let elementoPai = document.querySelector('#container-principal')

elementoPai.insertBefore(novoElemento, elementoReferencia)
