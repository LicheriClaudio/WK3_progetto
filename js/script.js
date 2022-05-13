function num_uno() {
    document.getElementById("risultato").value += 1;
    
}
function num_due() {

    document.getElementById('risultato').value += 2
}
function num_tre() {

    document.getElementById('risultato').value += 3
}
function num_quattro() {

    document.getElementById('risultato').value += 4
}
function num_cinque() {

    document.getElementById('risultato').value += 5
}
function num_sei() {

    document.getElementById('risultato').value += 6
}
function num_sette() {

    document.getElementById('risultato').value += 7
}
function num_otto() {

    document.getElementById('risultato').value += 8
}
function num_nove() {

    document.getElementById('risultato').value += 9
}
function num_zero() {

    document.getElementById('risultato').value += 0
}
function canc() {

    document.getElementById('risultato').value = ' '
}
let num1
function piu(){
     num1 = +(document.getElementById('risultato').value);
    document.getElementById('risultato').value += '+'
    console.log(num1)
    
}
let num2
function meno() {
    num2 = +(document.getElementById('risultato').value);
    document.getElementById('risultato').value += '-'  
    console.log
    
}
let num3
function x() {
    num3 = +(document.getElementById('risultato').value);
    document.getElementById('risultato').value += 'x'
    console.log
   
}
let num4
function diviso() {
    num4 = +(document.getElementById('risultato').value);
    document.getElementById('risultato').value += '/'
    console.log
    
}

let num5 
function tot() {
      
    num5 = document.getElementById('risultato').value
    console.log(num5)
    console.log(typeof num5)
    if(num5.includes('+')){
        let num8 = num5.split('+') 
        risultato = +num8[0]+ +num8[1] 
        console.log(risultato)
    

        document.getElementById('risultato').value = risultato
    
    }else if (num5.includes('-')){
        let num8 = num5.split('-')
        risultato = risultato = +num8[0] - +num8[1]
        console.log(risultato)
        console.log(risultato)
        document.getElementById('risultato').value = risultato
    }else if (num5.includes('x')) {
    let num8 = num5.split('x')
    risultato = risultato = +num8[0] * +num8[1]
    console.log(risultato)
    console.log(risultato)
    document.getElementById('risultato').value = risultato
    }
    else if (num5.includes('/')) {
        let num8 = num5.split('/')
        risultato = risultato = +num8[0] / +num8[1]
        console.log(risultato)
        console.log(risultato)
        document.getElementById('risultato').value = risultato
    } 




}





  



