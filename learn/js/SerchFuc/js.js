let serch_fainder = [];
serch_fainder.push('html');
serch_fainder.push('js');
serch_fainder.push('python');
serch_fainder.push('php');
serch_fainder.push('hacker');

//console.log(serch_fainder.indexOf('php'));

// let findtudu = serch_fainder.findIndex( function(tudu) {
//     return tudu == 'php'
// } )

// console.log(findtudu)

// let find_serch = function(serch_list,serch_item){
//     let find = serch_list.findIndex(function(list){
//         return list.toLowerCase() == serch_item.toLowerCase()
//     })

//     return find
// }

// console.log(find_serch(serch_fainder,'Python'));

// console.log(serch_fainder.find(function(find){
//     return find.toLowerCase() == "PHP".toLowerCase()
// }));

let serch_find = function(serch_list,serch_item){
    let find = serch_list.find(function(find_word){
        return find_word.toLowerCase() == serch_item.toLowerCase()
    })
    return find
}

console.log(serch_find(serch_fainder,'JS'))