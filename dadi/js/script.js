var numero_utente = parseInt(prompt("scegli un numero da 1 a 6"));
var numero_computer = Math.floor(Math.random() * 6) + 1;
document.getElementById('numero_utente').innerHTML = "Il tuo numero è " + numero_utente;
document.getElementById('numero_computer').innerHTML = "Il numero del computer è " + numero_computer;


if(numero_utente < numero_computer){
    document.getElementById('risultato').innerHTML = ('hai PERSO :-(')
}else{
    (numero_utente > numero_computer)
    {
        document.getElementById('risultato').innerHTML = ('hai VINTO!!! :-D')
    }
}