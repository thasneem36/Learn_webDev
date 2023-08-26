
// let mytag = document.querySelectorAll('#idone');

// console.log(mytag);

// let tagedit = document.querySelector('p');
// tagedit.textContent = 'Changed using JS';

let edit = document.querySelectorAll('p');

edit.forEach((pera) => {
    pera.textContent = "changed using js loop";
})

let newp = document.createElement('p');
newp.textContent = 'hello world!';
document.querySelector('body').appendChild(newp);

document.querySelector('button').addEventListener('click', (even) => {
    even.target.textContent = 'added'
} );