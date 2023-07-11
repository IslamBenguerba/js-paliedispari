let btnGenerete = document.getElementById('btn')
const check = document.getElementById('check')
btnGenerete.addEventListener('click',confronta)
/**
 * @param {number} inputNumber numero dato dall'utente
 * @param {number} inputRandom numero random 
 * @param {number} valore somma dei i due numeri 
 * @param {string} select indica tramite scelta dell'utente se il controllo sara per un numero pario o dispari
 */

function confronta(){
    let select = document.getElementById('select').value
    let inputNumber = document.getElementById('numero').value
    let inputRandom = randomIntFromInterval(1,5)
    let valore = somma(inputNumber,inputRandom)
    //console.log(valore+ ' '+'questa è la somma')
    //console.log(inputRandom)
    //console.log(select)
    //console.log('il tuo numero'+' '+ inputNumber)
    pariDispai(valore,select)
}

/**
 * crea un valore random con un range dato da due numeri
 * @param {number} min 
 * @param {number} max 
 * @returns {number} 
 */
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
console.log(randomIntFromInterval(1,5))
/**
 * 
 * @param {number} num1 un numero da controllare 
 * @param {string} select serve per determinare se è pari o dispari
 */
function pariDispai(num1,select){
    if(num1 % 2 === 0){
        if(select === 'pari'){
            //console.log(num1+' '+'congratulazioni hai vinto')
            check.innerHTML = `${num1} è il tuo numero sommato ed hai vinto`
        }else{
            console.log(num1+' '+'spiacente hai perso')
            check.innerHTML = `${num1} è il tuo numero sommato ed hai perso`
        }
        
    }else if( num1 % 2 ===1){
        if(select === 'dispari'){
            // console.log(num1+' '+'congratulazioni hai vinto')
            check.innerHTML = `${num1} è il tuo numero sommato ed hai vinto`
        }else{
            //console.log(num1+' '+'spiacente hai perso')
            check.innerHTML = `${num1} è il tuo numero sommato ed hai perso`
        
        }
    }
}
/**
 * se il numemro è più elevato di 5 il return non è la somma ma un errore sull'HTML
 * 
 * @param {number} num1 
 * @param {number} num2 
 * @returns {number} 
 */
function somma(num1,num2){
    if(num1> 5){
        return check.innerHTML = 'spiacente ma il numero'+' '+ num1+' '+'è troppo elevato' 
        
    }
    summ = parseInt(num1) + parseInt(num2)
    return summ
}