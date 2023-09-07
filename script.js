const plusButton = document.querySelector('.plus');
const minusButton = document.querySelector('.minus');
const screen = document.querySelector('.result');
const clearButton = document.querySelector('.clear');
let result = 0;
function setScreen(number){
    return screen.innerHTML = number;
};

plusButton.addEventListener('click', () => setScreen(++result))
minusButton.addEventListener('click', () => setScreen(--result))
clearButton.addEventListener("click",()=> setScreen(result = 0))