let hero=['iorn man','spider man','cap','venom','bat man']


let myObject = {

    title:'html, css, js',
    Heros:'iorn man',
    price:999,

    printprice: function(data){
        console.log(data)
    },

    changeprice: function(newPrice){
        this.price=newPrice
    }

}

console.log(myObject.price);

myObject.price='20000rs';

myObject.changeprice( 500 +'Rs');
console.log(myObject.price);