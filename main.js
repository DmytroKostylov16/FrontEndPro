const container = document.querySelector('#containerWithButtons');
const greenButton = document.querySelector('#greenButton');
const yellowButton = document.querySelector('#yellowButton');
const redButton = document.querySelector('#redButton');

container.addEventListener('click', (e) => {
    console.log('Clicked!', e.target);
});

greenButton.addEventListener('click', () => {});

yellowButton.addEventListener('click', () => {});

redButton.addEventListener('click', () => {});