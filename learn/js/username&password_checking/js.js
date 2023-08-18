let email='thasneem@gmail.com';
let password='12345';


let emailcheck = function (userEmail){
    
    if(email.includes('@gmail.com'))
    {
        return true
    }else{
        return false
    }

}
console.log(emailcheck(email));



function passcheck(userpass){
    if((password.includes('1234')) && (password.length >= 6))
    {
        return true
    }
    else{
        return false
    }
}
console.log(passcheck(password));