window.addEventListener('load', start)

let globalNames = ["Um", "Dois", "Três", "Quatro", "Cinco"]
let inputName = null;

function start() {
    inputName = document.querySelector('#inputName')
    preventFormSubmit()
    activateInput()
    render()
}

function preventFormSubmit() {
    function handleFormSubmit(event) {
        event.preventDefault()
    }

    let form = document.querySelector('form')
    form.addEventListener('submit', handleFormSubmit)

}

function activateInput() {
    function insertName(newName) {
        globalNames.push(newName)
        render()
    }

    function handleTyping(event){
        if (event.key === "Enter") {
            insertName(event.target.value)
        }
    }

    inputName.addEventListener('keyup', handleTyping)
    inputName.focus()
}

function render() {
    let divNames = document.querySelector('#names')

    let ul = document.createElement('ul')

    for (let i = 0; i < globalNames.length; i++) {
        let currentName = globalNames[i]

        let li = document.createElement('li')
        li.textContent = currentName
        ul.appendChild(li)
    }

    divNames.appendChild(ul)
}