

let rupess = (dollor) => {
    if (typeof dollor === 'number'){
        return dollor * 28;
    }else{
        throw Error('Plz Enter The Number')
    }
}

try {
    console.log(rupess('one'))
} catch (error) {
    console.error(error)    
}

console.log('show this meassage')