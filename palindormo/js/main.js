
const btncheck = document.getElementById('btn')
const spancheck = document.getElementById('ceck')
btncheck.addEventListener('click',controlla)
function controlla(){
    let inputparola = document.getElementById('input').value
    console.log(inputparola)
    inputarray = inputparola.split('')
    const arrayMood = reverse(inputarray)
    console.log(arrayMood)
    let stringReverse= trasformArray(arrayMood)
    controlArrayvsInput(stringReverse,inputparola)
    

}
// CON QUESTO METODO NON USIAMO JOIN REVERSE 
// SICURAMENTE E' PIU' LUNGO 
/**
 * 
 * @param {array} array lista della parola inserita 
 * @returns {array} restiruisce un array al contrario
 */
function reverse(array){
    reversearray = []
    for(i = array.length - 1; i >=0;i--){
        console.log(array[i])
        reversearray.push(array[i])
    }
    return reversearray
}
/**
 * 
 * @param {array} array è l'array a qui vogliamo trasformare in stringa
 * @param {string} parolaTrasform è la parola che viene dal' array
 * @returns stringa
 */
function trasformArray(array){
    parolaTrasform =""
    for(i = 0; i<array.length;i++){
        parolaTrasform +=array[i]
    }
    console.log(parolaTrasform)
    return parolaTrasform
}
/**
 * constrolla se una stringa è uguale al'altra
 * @param {string} string  
 * @param {string} string2 
 */
function controlArrayvsInput(string,string2){
    if( string === string2){
        console.log( string +' '+'è palòindormo')
        spancheck.innerHTML = string +' '+'è palindormo'
    }else{
        spancheck.innerHTML = string +' '+'non è palòindormo'
    }
}