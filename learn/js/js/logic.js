// && = Both sides should be ture
// || = one side ture

let islogged = true;
let payment = false;

if (islogged && payment){
    console.log('done');
}else{
    console.log('buy now')
}

let google = true;
let facebook = false;
if(google || facebook){
    console.log("logged in");
}else{
    console.log("plz logged");
}