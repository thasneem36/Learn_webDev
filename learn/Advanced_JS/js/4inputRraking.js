// document.querySelector('#trak').addEventListener('input', (event) => {
//     console.log(event.target.value);
// })

function search() {
    // let myValue = document.getElementById('trak').value
    // console.log(myValue);

    // if (myValue < 1 || myValue > 20){
    //     console.log('not valid input')
    // }else{
    //     console.log(myValue)
    // }
    let bgcolor = document.querySelector('body')
    bgcolor.style.background = 'green';
}

function addv (){
    let ul = document.querySelector('ul')
    let addli = document.createElement('li')
    addli.textContent = 'create by js'
    ul.appendChild(addli)
}