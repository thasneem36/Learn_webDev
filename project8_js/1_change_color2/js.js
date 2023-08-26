
// let se_co = document.getElementById("seco").options[document.getElementById('seco').selectedIndex].text;
// console.log(se_co)

function changecolor(){

    let colB = document.getElementById("colorB")
    colB.style.color = document.getElementById("seco").options[document.getElementById('seco').selectedIndex].text;

    let colC = document.getElementById("colorO")
    colC.style.color = document.getElementById("seco").options[document.getElementById('seco').selectedIndex].text;

}