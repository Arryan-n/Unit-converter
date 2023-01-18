/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let inputel = document.getElementById("inpt")
let btnel = document.getElementById("btn")
let boxone = document.getElementById("box1")
let boxtwo = document.getElementById("box2")
let boxthree = document.getElementById("box3")


btnel.addEventListener("click", function(){
   
    let save = inputel.value 
    let foot = save*3.281
    let metre = save/3.281
    let gallons = save*0.264
    let litre = save/0.264
    let pound = save*2.204
    let kg = save/2.204
    boxone.innerHTML = `
    <h3>
    Length (Meter/Feet)
    </h3>  
    <p style="color: #fff">
    ${save} metres equals ${foot.toFixed(2)} foots |${save} feets equals ${metre.toFixed(2)} metres
    </p>`

    boxtwo.innerHTML = `
    <h3>
    Volume (Litre/gallon)
    </h3>  
    <p style="color: #fff">
    ${save} litres equals ${gallons.toFixed(2)} gallons |${save} gallons equals ${litre.toFixed(2)} litres
    </p>`

    boxthree.innerHTML = `
    <h3>
    Mass (Kilogram/Pound)
    </h3>  
    <p style="color: #fff">
    ${save} kilo equals ${pound.toFixed(2)} pounds |${save} pounds equals ${kg.toFixed(2)} kilos
    </p>`
    

    
})
