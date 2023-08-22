// 1
// function sayhello(name){
//     return `hello ${name}`
// }

let sayhello = (name) => `hello ${name}`

console.log(sayhello('thasneem'));

let text_ad = [ 
    {
        title: 'adv.js',
        isDone: true 
    } , 
    {
        title: 'python',
        isDone: false
    } , 
    {
        title: 'download movie',
        isDone: false
    }];

// let filter_text = text_ad.filter((tell) => {
//     return tell.isDone === false;
// })
let filter_text = text_ad.filter((tell) => tell.isDone === false)

console.log(filter_text);
