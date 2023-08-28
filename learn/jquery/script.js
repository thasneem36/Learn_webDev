// let style = {
//     'fontSize' : '50px',
//     'background' : 'red',
//     'color' : 'white',
// }

// $('li').html('<li>I hack you</li>')


// $('li').css('color','green')

// $('h1').click(function () {
//     $(this).css('color','red');
// })

// $('input').keypress(function (event) { 
//     console.log(event.target.value);
// })

// document.querySelector('input').addEventListener('keypress', (event)=>{
//     console.log(event.target.value)
// })

// $('h1').on('mouseover', function () {
//     $(this).css('font-size','50px');
// })

$(".btnA").on('click',function(){
    $('.one').fadeToggle(1000 , function(){
        // $(this).remove()
    });
})