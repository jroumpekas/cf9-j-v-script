const h1DOM = document.getElementById('helloText')
h1DOM.innerHTML += '<strong>Hello World!</strong>'
h1DOM.style.backgroundColor = 'ff0000'

const pDOM = document.createElement('p')
pDOM.innerHTML = "Have a nice coding."
pDOM.classList.add('borderBlack')

document.body.appendChild(pDOM)