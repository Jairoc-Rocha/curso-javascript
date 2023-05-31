// Evento por tecla

// window.addEventListener('keydown', function(e) {
//     if (e.key == "q") {
//         console.log("Apertou a tecla q")
//     } else if (e.key === "Enter") {
//         console.log("Apertou a tecla Enter")
//     }
// })

// window.addEventListener('keyup', function(e) {
//     if (e.key == "q") {
//         console.log("Apertou a tecla q")
//     } else if (e.key === "Enter") {
//         console.log("Apertou a tecla Enter")
//     }
// })

// window.addEventListener('keypress', function(e) {
//     if (e.key == "q") {
//         console.log("Apertou a tecla q")
//     } else if (e.key === "Enter") {
//         console.log("Apertou a tecla Enter")
//     }
// })

// Eventos do mouse

let btn1 = document.querySelector('#btn1')
let btn2 = document.querySelector('#btn2')
let btn3 = document.querySelector('#btn3')

btn1.addEventListener('mousedown', () => {
    console.log("Evento mousedown")
})

btn2.addEventListener('mouseup', () => {
    console.log("Evento mouseup")
})

btn3.addEventListener('dblclick', () => {
    console.log("Evento dblclick")
})


// window.addEventListener('mousemove', (e) => {
//     console.log(e.x)
//     console.log(e.y)
// })
window.addEventListener('scroll', (e) => {
    if (window.pageYOffset > 1000) {
        console.log("Chegou na posição")
    }
})

input1 = document.querySelector('#input1')
input1.addEventListener('focus', () => {
    console.log("Entrou no input1")
})

input1.addEventListener('blur', () => {
    console.log("Saiu no input1")
})

window.addEventListener('load', () => {
    console.log("Carregou a página......")
})