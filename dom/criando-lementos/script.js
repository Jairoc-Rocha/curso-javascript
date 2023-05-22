function addInput () {
    const ul = document.querySelector('#inputs');

    const newLi = document.createElement('li');
    newLi.innerText = 'Novo input no LI: ';

    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.name = 'input';

    newLi.appendChild(newInput);
    ul.appendChild(newLi);
}