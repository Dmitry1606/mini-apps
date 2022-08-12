let ul = document.querySelector('ul');
let input = document.querySelector('input');
let button = document.querySelector('button');
let form = document.querySelector('form');


form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log(event);
    let li = document.createElement('li');
    li.innerText = input.value;
    let checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox');
    li.prepend(checkbox);
    ul.appendChild(li);
    input.value = ''
    let listItems = document.querySelectorAll('li');
    for (let i = 0; i < listItems.length; i++) {
        console.log(listItems[i])
        listItems[i].addEventListener('click', function (event) {
            if (checkbox.checked) {
                li.style.textDecoration = 'line-through';
            } else {
                li.style.textDecoration = 'none';
            }
        })
    }
    let closeButton = document.createElement('button');
    li.append(closeButton);
    closeButton.style.width = '10px';
    closeButton.style.height = '10px';
    closeButton.addEventListener('click', function (event) {
        li.remove(closeButton);
    })
})