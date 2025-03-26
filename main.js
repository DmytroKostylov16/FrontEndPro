const myDiv = document.querySelector('#text');
const colorBtn = document.querySelector('#colorBtn');

colorBtn.addEventListener('click', () => {
    myDiv.classList.toggle('other-color');
    myDiv.classList.toggle('default-color')
});
