const h1DOM = document.getElementById('helloText')
h1DOM.innerHTML += '<br><strong>Hello World!</strong>'
h1DOM.style.backgroundColor = '#883d3d'

const pDOM = document.createElement('p')
pDOM.innerHTML = "Have a nice coding."
pDOM.classList.add('borderBlack')

document.body.appendChild
(pDOM)