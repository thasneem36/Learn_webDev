let keylist = 'qwertyuioplkjhgfdsazxcvbnm!@#$%^&*1234567890'

let password = ''

let genetatepass = (plength) => {
    password = ''

    for (i = 0; i < plength ;i++){
        password += keylist.charAt(Math.floor(Math.random() * keylist.length))
    }
    return password;

}

let passwordGEN = (passl) => {
    document.output.password.value = genetatepass(passl)
}