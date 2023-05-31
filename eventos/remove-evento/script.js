let btn1 = document.querySelector('#btn1')
let btn2 = document.querySelector('#btn2')

btn1.addEventListener('click', handleClick)

function handleClick () {
    console.log("Clique em mim!")
}

btn2.addEventListener('click', () => {
    btn1.removeEventListener('click', handleClick)
    console.log("removendo o evento do btn1")
})