const DEFAULT = 0;
let counter = DEFAULT;

window.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#btnDiv').addEventListener('click', () => onDividedClicked());
    document.querySelector('#btnDecr').addEventListener('click', () => onDecreasedClicked());
    document.querySelector('#btnReset').addEventListener('click', () => onResetClicked());
    document.querySelector('#btnIncr').addEventListener('click', () => onIncreasedClicked());
    document.querySelector('#btnMul').addEventListener('click', () => onMultipliedClicked());
    render();
});

// Controllers
function onDividedClicked() {
    divideCounter();
}

function onDecreasedClicked() {
    decreaseCounter();
}

function onResetClicked() {
    resetCounter();
}

function onIncreasedClicked() {
    increaseCounter();
}

function onMultipliedClicked() {
    multiplyCounter();
}

// Model
function divideCounter() {
    counter = counter / 2;
    render();
}

function decreaseCounter() {
    counter--;
    render();
}

function resetCounter() {
    counter = DEFAULT;
    render();
}

function increaseCounter() {
    counter++;
    render();
}

function multiplyCounter() {
    counter = counter * 2;
    render();
}

// View
function render() {
    const counterEl = document.querySelector('#counter');
    counterEl.textContent = counter;
    styleCounter(counterEl);
}

function styleCounter(counterEl) {
    counterEl.classList.remove('color-green', 'color-red', 'color-black');

    if (counter > 0) {
        counterEl.classList.add('color-green');
    } else if (counter < 0) {
        counterEl.classList.add('color-red');
    } else {
        counterEl.classList.add('color-black');
    }
}