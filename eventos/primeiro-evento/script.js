let button = document.querySelector('#button')

button.addEventListener('click', handleClick)

function handleClick() {
    alert('Evento do botão acionado!')
    console.log("Evento do botão acionado no log!'")
}