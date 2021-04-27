/* var number1 = Number(prompt('inserisci numero'));
var number2 = Number(prompt('inserisci un numero'));

if (number1 === number2) {
    console.log('Same number try again');
} else if (number1 > number2) {
    console.log(number1);
} else {
    console.log(number2);
} */

// Esercizio 2
// L’utente inserisce due parole in successione, con due prompt.
//Il software stampa prima la parola più corta, poi la parola più lunga.

var word_1 = prompt('Inserisci una parola')
var word_2 = prompt('Inserisci una seconda parola')

if (word_1.length < word_2.length) {
    console.log(word_1);
} else (word_2.length < word_1.length); {
    console.log(word_2);
}







